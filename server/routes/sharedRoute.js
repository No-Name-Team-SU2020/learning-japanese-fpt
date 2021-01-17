const router = require('express').Router();
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const sequelize = require('sequelize');
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const Class = require('../models/Class');
const Is_Attended = require('../models/Is_Attended');
const checkAuth = require('../middleware/checkAuth');
const Class_Subject = require('../models/Class_Subject');
const Student_Subject = require('../models/Student_Subject');
const Teacher_Subject = require('../models/Teacher_Subject');
const Grammar = require('../models/Grammar');
const Quiz_Preset = require('../models/Quiz_Preset');
const fetch = require('node-fetch');

//view all subjects in class
router.get('/class-subjects/:classId', checkAuth, async (req, res) => {
    try {
        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            }
        });

        const currentTeacher = await Teacher.findOne({
            where: {
                user_name: checkUser.user_name
            },
        });

        const classId = req.params.classId;

        const currentClass = await Class.findOne({
            where: {
                class_id: classId
            }
        })

        // const api_url = `http://localhost:8000/classes/${classId}`;
        // const fetch_class = await fetch(api_url, {
        //     method: 'GET'
        // })
        // const class_response = await fetch_class.json();

        //console.log(class_response);
        
        let fetched_json;
        if (checkUser.role_id === 2 && currentTeacher) {
            data = await Class.findAll({
                where: { class_id: currentClass.class_id },
                include: [
                    {
                        model: Subject, through: { attributes: [] },
                        include: [
                            {
                                model: Teacher_Subject, where: {
                                    teacher_id: currentTeacher.teacher_id
                                }
                            }
                        ]
                    },
                ]
            });
            // const fap_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5nYW5udHQiLCJpYXQiOjE2MTA3OTI2NTYsImV4cCI6MTYxMDgyMTQ1Nn0.cE2yiPGS8YcjmGQMJsP7n7JffQsTLTXqXgz0nYgzh64'
            // const api_url = `http://localhost:8000/teacher/class-subjects/${class_response.data.class_id}`;
            // const fetch_response = await fetch(api_url, {
            //     method: 'GET',
            //     headers: {
            //         'fap-token': fap_token
            //     }
            // });
            // fetched_json = await fetch_response.json();
        }
        else if (checkUser.role_id === 3 && currentStudent) {
            data = await Class.findAll({
                where: { class_id: currentClass.class_id },
                include: [
                    {
                        model: Subject, through: { attributes: [] },
                        include: [
                            {
                                model: Student_Subject, where: {
                                    student_id: currentStudent.student_id
                                }
                            }
                        ]
                    },
                ]
            });
            // const fap_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5nYW5udHQiLCJpYXQiOjE2MTA3OTI2NTYsImV4cCI6MTYxMDgyMTQ1Nn0.cE2yiPGS8YcjmGQMJsP7n7JffQsTLTXqXgz0nYgzh64'
            // const api_url = `http://localhost:8000/student/class-subjects/${class_response.data.class_id}`;
            // const fetch_response = await fetch(api_url, {
            //     method: 'GET',
            //     headers: {
            //         'fap-token': fap_token
            //     }
            // });
            // fetched_json = await fetch_response.json();
        }
        else {
            return req.json({
                message: "You don't have permission to view this resource"
            })
        }

        if (!data) {
            return res.json({
                message: "Cannot find data"
            })
        }

        return res.json({
            message: "Fetch subjects in class found",
            data: fetched_json.data
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all lesson in a subject
router.get('/subjects/:subjectId/lessons', checkAuth, async (req, res) => {
    try {

        const currentUser = req.user.user_name;

        const subjectId = req.params.subjectId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            }
        });

        if (!currentSubject) {
            return res.json({
                message: "Subject not found"
            });
        }

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        let listLessons;
        //let currentStudent;
        //let checkStudentSubject;
        //let currentTeacher;
        //let checkTeacherSubject;
        if (checkUser.role_id === 3) {
            //const permission = new Boolean(true);

            //check student
            const currentStudent = await Student.findOne({
                where: {
                    user_name: checkUser.user_name
                }
            });

            const checkStudentSubject = await Student_Subject.findOne({
                where: {
                    student_id: currentStudent.student_id,
                    subject_id: currentSubject.subject_id
                }
            });

            if (!checkStudentSubject) {
                return res.json({
                    message: "Student not study this subject"
                })
            }

            //check diem danh danh cho student
            // const checkAttendance = await Is_Attended.findOne({
            //     where: {
            //         student_id: currentStudent.student_id,
            //     },
            // })

            listLessons = await Lesson.findAll({
                where: {
                    subject_id: currentSubject.subject_id
                },
                order: [
                    ['lesson_id', 'ASC']
                ],
                // include: [
                //     {
                //         model: Is_Attended, where: {
                //             student_id: currentStudent.student_id
                //         },
                //         required: false
                //     }
                // ]
            });

            // if (!listLessons) {
            //     return res.json({
            //         message: "Lesson not found",
            //     });
            // }

            // return res.json(
            //     {
            //         message: "Lessons found",
            //         data: listLessons
            //     }
            // )
        }
        else if (checkUser.role_id === 2) {
            //check teacher
            const currentTeacher = await Teacher.findOne({
                where: {
                    user_name: checkUser.user_name
                },
            });

            const checkTeacherSubject = await Teacher_Subject.findOne({
                where: {
                    teacher_id: currentTeacher.teacher_id,
                    subject_id: currentSubject.subject_id
                }
            })

            if (!checkTeacherSubject) {
                return res.json({
                    message: "Teacher not teach this subject"
                })
            }

            listLessons = await Lesson.findAll({
                where: {
                    subject_id: currentSubject.subject_id
                },
                order: [
                    ['lesson_id', 'ASC']
                ],
            });

            // if (!listLessons) {
            //     return res.json({
            //         message: "Lesson not found",
            //     });
            // }

            // return res.json(
            //     {
            //         message: "Lessons found",
            //         data: listLessons
            //     }
            // )
        }
        else if(checkUser.role_id === 1){
            listLessons = await Lesson.findAll({
                where: {
                    subject_id: currentSubject.subject_id
                },
                order: [
                    ['lesson_id', 'ASC']
                ],
            });

            // if (!listLessons) {
            //     return res.json({
            //         message: "Lesson not found",
            //     });
            // }

            // return res.json(
            //     {
            //         message: "Lessons found",
            //         data: listLessons
            //     }
            // )
        }
        else {
            return res.json({
                message: "You don't have permission to view this resource"
            })
        }

        if (!listLessons) {
            return res.json({
                message: "Lesson not found",
            });
        }

        return res.json(
            {
                message: "Lessons found",
                data: listLessons
            }
        )

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view class by id
router.get('/classes/:classId', async (req, res) => {
    try {
        const classId = req.params.classId;

        const findClass = await Class.findOne({
            where: {
                class_id: classId
            }
        });

        if (!findClass) {
            return res.status(404).json({
                message: "Class not found"
            })
        }

        return res.json({
            message: "Class found",
            data: findClass
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view subject by id
router.get('/subjects/:subjectId', async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const findSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            }
        });

        if (!findSubject) {
            return res.status(404).json({
                message: "Subject not found"
            })
        }

        return res.json({
            message: "Subject found",
            data: findSubject
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view lesson by lesson id
router.get('/lessons/:lessonId', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const findLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        });

        if (!findLesson) {
            return res.json({
                message: "Lesson not found"
            })
        }

        return res.json({
            message: "lesson found",
            data: findLesson
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all question by lesson for admin and do quiz for student
router.get('/lessons/:lessonId/questions', checkAuth, async (req, res) => {
    try {

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            }
        });

        const lessonId = req.params.lessonId;
        let listQuestions;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            },
            attributes: ['lesson_id', 'lesson_name']
        });

        if (!currentLesson) {
            return res.json({
                message: "lesson not found"
            });
        }

        let findQuizPreset;
        //get quiz preset for quiz
        findQuizPreset = await Quiz_Preset.findOne({
            where: {
                is_chosen: true
            }
        });
        let checkAttendance;
        if (checkUser.role_id === 3) {
            //check diem danh danh cho student
            checkAttendance = await Is_Attended.findOne({
                where: {
                    student_id: currentStudent.student_id,
                    lesson_id: currentLesson.lesson_id
                }
            })
        }

        if (checkUser.role_id === 1) {
            listQuestions = await Question.findAll({
                where: {
                    lesson_id: currentLesson.lesson_id
                },
                order: [
                    ['question_id', 'ASC']
                ],
                //attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d','subject_id', 'lesson_id', 'correct_answer']
            });

        } else if (checkUser.role_id === 3 && checkAttendance) {
            listQuestions = await Question.findAll({
                order: [
                    sequelize.literal('random()'),
                    ['question_id', 'ASC']
                ],
                limit: findQuizPreset.number_of_questions,
                where: {
                    lesson_id: currentLesson.lesson_id
                },
                attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d']
            })
        } else {
            return res.json({
                message: "User dont have permission to view this resource"
            })
        }

        if (!listQuestions) {
            return res.json({
                message: "questions not found",
            });
        }

        return res.json(
            {
                message: "All questions found",
                data: {
                    questions: listQuestions,
                    time: findQuizPreset.quiz_time,
                    lesson: currentLesson
                }
            }
        )
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view question by id
router.get('/questions/:questionId', checkAuth, async (req, res) => {
    try {

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        })

        let questionId = req.params.questionId;
        let question;
        let subject;

        if (checkUser.role_id === 1) {
            question = await Question.findOne({
                where: {
                    question_id: questionId
                }
            });

            subject = await Lesson.findOne({
                where: {
                    lesson_id: question.lesson_id
                },
                attributes: ['subject_id']
            });
        } else if (checkUser.role_id === 3) {
            question = await Question.findOne({
                where: {
                    question_id: questionId
                },
                attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d', 'lesson_id']
            });

            subject = await Lesson.findOne({
                where: {
                    lesson_id: question.lesson_id
                },
                attributes: ['subject_id']
            });
        } else {
            return res.json({
                message: "User dont have permission to view this resource"
            })
        }


        if (!question) {
            return res.json({
                message: "Question not found"
            })
        }

        return res.json({
            message: "Question found",
            data: {
                question,
                subject
            }
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all grammars in a lesson
router.get('/lessons/:lessonId/grammars', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        })

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: currentLesson.subject_id
            }
        })

        const grammars = await Grammar.findAll({
            where: {
                lesson_id: currentLesson.lesson_id
            }
        });

        if (!grammars) {
            return res.json({
                message: "Grammars not found"
            });
        }

        return res.json({
            message: "Grammars found",
            data: {
                grammars: grammars,
                subject: currentSubject,
                lesson: currentLesson
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view grammar by grammar id
router.get('/grammars/:grammarId', checkAuth, async (req, res) => {
    try {
        const grammarId = req.params.grammarId

        const grammar = await Grammar.findOne({
            where: {
                grammar_id: grammarId
            }
        });

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: grammar.lesson_id
            }
        });

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: currentLesson.subject_id
            }
        })

        if (!grammar) {
            return res.json({
                message: "Grammar not found"
            })
        }

        return res.json({
            message: "Grammar found",
            data: {
                grammars: grammar,
                subject: currentSubject.subject_code,
                lesson: currentLesson.lesson_name
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

module.exports = router;