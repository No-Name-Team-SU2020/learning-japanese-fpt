const router = require('express').Router();
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const Class = require('../models/Class');
const { Op } = require('sequelize');
const checkAuth = require('../middleware/checkAuth');
const Grammar = require('../models/Grammar');
const Quiz_Preset = require('../models/Quiz_Preset');
const fetch = require('node-fetch');
const Class_Subject = require('../models/Class_Subject');
const Teacher_Class = require('../models/Teacher_Class');
const Teacher_Subject = require('../models/Teacher_Subject');
const Student_Class = require('../models/Student_Class');
const Student_Subject = require('../models/Student_Subject');
require('dotenv').config();

//fetch all classes from fap and view list classes
router.get('/classes', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/classes`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        return res.json({
            message: "Fetch success",
            data: fetched_json.data
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//upsert classes
router.post('/classes', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/classes`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        //update and insert subjects
        const upsertClass = await Class.bulkCreate(fetched_json.data, {
            fields: ["class_id", "class_name"],
            updateOnDuplicate: ["class_name"]
        });
        console.log(upsertClass);
        return res.json({
            message: "Classes upsert success",
            data: {
                deleted: deleteClass,
                upsert: upsertClass
            }
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//fetch all subjects from fap and view list subjects
router.get('/subjects', checkAuth, async (req, res) => {
    try {
        ////const fap_token = ''
        const api_url = `http://localhost:8000/api/subjects`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        return res.json({
            message: "Fetch success",
            data: fetched_json.data
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//upsert subject
router.post('/subjects', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/subjects`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        //update and insert subjects
        const upsertSubject = await Subject.bulkCreate(fetched_json.data, {
            fields: ["subject_id", "subject_code", "subject_name"],
            updateOnDuplicate: ["subject_code", "subject_name"]
        });
        console.log(upsertSubject);
        return res.json({
            message: "Subjects upsert success",
            data: upsertSubject
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//insert class subject
router.post('/classes-subjects', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/classes-subjects`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        const upsertClassSubject = await Class_Subject.bulkCreate(fetched_json.data, {
            fields: ["class_id", "subject_id"],
            //updateOnDuplicate: ["class_name"]
        });
        console.log(upsertClassSubject);
        return res.json({
            message: "Class subject insert success",
            data: upsertClassSubject
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//insert teacher class
router.post('/teachers-classes', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/teachers-classes`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        const upsertTeacherClass = await Teacher_Class.bulkCreate(fetched_json.data, {
            fields: ["teacher_id", "class_id"],
            //updateOnDuplicate: ["class_name"]
        });
        console.log(upsertTeacherClass);
        return res.json({
            message: "Teacher class insert success",
            data: upsertTeacherClass
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//insert teacher subject
router.post('/teachers-subjects', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/teachers-subjects`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        const upsertTeacherSubject = await Teacher_Subject.bulkCreate(fetched_json.data, {
            fields: ["teacher_id", "subject_id"],
            //updateOnDuplicate: ["class_name"]
        });
        console.log(upsertTeacherSubject);
        return res.json({
            message: "Teacher subject insert success",
            data: upsertTeacherSubject
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//insert student class
router.post('/students-classes', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/students-classes`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        const upsertStudentClass = await Student_Class.bulkCreate(fetched_json.data, {
            fields: ["student_id", "class_id"],
            //updateOnDuplicate: ["class_name"]
        });
        console.log(upsertStudentClass);
        return res.json({
            message: "Student class insert success",
            data: upsertStudentClass
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

router.post('/students-subjects', checkAuth, async (req, res) => {
    try {
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/students-subjects`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        const upsertStudentSubject = await Student_Subject.bulkCreate(fetched_json.data, {
            fields: ["student_id", "subject_id"],
            //updateOnDuplicate: ["class_name"]
        });
        console.log(upsertStudentSubject);
        return res.json({
            message: "Student subject insert success",
            data: upsertStudentSubject
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all lessons in a subject
router.get('/subjects/:subjectId/lessons', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        //const fap_token = ''
        const api_url = `http://localhost:8000/api/subjects/${subjectId}/lessons`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        return res.json({
            message: "Fetch success",
            data: fetched_json.data
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//upsert all lessons in a subject
router.post('/subjects/:subjectId/lessons', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        ///const fap_token = ''
        const api_url = `http://localhost:8000/api/subjects/${subjectId}/lessons`;
        const fetch_response = await fetch(api_url, {
            method: 'GET',
            // headers: {
            //     'fap-token': fap_token
            // }
        });
        const fetched_json = await fetch_response.json();
        console.log(fetched_json);
        const upsertLesson = await Lesson.bulkCreate(fetched_json.data, {
            fields: ["lesson_id", "lesson_name", "lesson_content", "subject_id"],
            updateOnDuplicate: ["lesson_name", "lesson_content", "subject_id"]
        })
        return res.json({
            message: "Fetch success",
            data: upsertLesson
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all question by subject
router.get('/subjects/:subjectId/questions', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            },
        });

        if (!currentSubject) {
            return res.status(404).json({
                message: "Subject not found"
            })
        }

        const listQuestions = await Question.findAll({
            where: {
                subject_id: currentSubject.subject_id
            }
        });

        if (!listQuestions) {
            return res.status(404).json({
                message: "questions not found"
            })
        }

        return res.json({
            message: "questions found",
            data: listQuestions
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new question
router.post('/subjects/:subjectId/lessons/:lessonId/questions', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        const lessonId = req.params.lessonId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            },
        })

        if (!currentSubject) {
            return res.status(404).json({
                message: "Subject not found"
            })
        }

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId,
                subject_id: currentSubject.subject_id
            },
        });

        if (!currentLesson) {
            return res.status(404).json({
                message: "Lesson not found"
            })
        }

        const { question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

        if (!question_content || question_content.length === 0) {
            return res.status(406).json({
                message: "question content is not valid",
                data: null,
            });
        }

        if (!option_a || option_a.length === 0) {
            return res.status(406).json({
                message: "option A content is not valid",
                data: null,
            });
        }

        if (!option_b || option_b.length === 0) {
            return res.status(406).json({
                message: "option B content is not valid",
                data: null,
            });
        }

        if (!option_c || option_c.length === 0) {
            return res.status(406).json({
                message: "option C content is not valid",
                data: null,
            });
        }

        if (!option_d || option_d.length === 0) {
            return res.status(406).json({
                message: "option D content is not valid",
                data: null,
            });
        }

        if (!correct_answer || correct_answer.length === 0 ||
            (correct_answer !== option_a && correct_answer !== option_b && correct_answer !== option_c && correct_answer !== option_d)) {
            return res.status(406).json({
                message: "correct answer is not valid",
                data: null,
            });
        }

        const newQuestion = await Question.create({
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            subject_id: currentSubject.subject_id,
            lesson_id: currentLesson.lesson_id,
            correct_answer,
        });

        return res.json({
            message: 'Question created successfully',
            data: newQuestion
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update question
router.put('/questions/:questionId', checkAuth, async (req, res) => {
    try {
        const questionId = req.params.questionId;

        const currentQuestion = await Question.findOne({
            where: {
                question_id: questionId
            }
        });

        if (!currentQuestion) {
            return res.json({
                message: 'Question not found',
            });
        }

        const { question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

        const updateQuestion = await Question.update({
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
        },
            {
                where: {
                    question_id: currentQuestion.question_id
                }
            });

        return res.json({
            message: 'Update successfully',
            data: updateQuestion
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete question
router.delete('/questions/:questionId', checkAuth, async (req, res) => {
    try {
        const questionId = req.params.questionId;

        const deleteQuestion = await Question.destroy({
            where: {
                question_id: questionId
            }
        });

        if (!deleteQuestion) {
            return res.json({
                message: 'Question cannot be deleted',
            });
        }

        return res.json({
            message: 'Question deleted successfully',
            data: deleteQuestion
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//search for question
router.get('/search', checkAuth, async (req, res) => {
    try {
        const { input } = req.query;

        const questions = await Question.findAll({
            where: {
                question_content: {
                    [Op.like]: '%' + input + '%'
                }
            },
            order: [
                ['question_id', 'ASC']
            ]
        });

        if (!questions || questions.length === 0) {
            return res.status(404).json("No question founded");
        }
        return res.json({
            message: "Found question",
            data: questions
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new grammar
router.post('/lessons/:lessonId/grammars', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const { vocabulary, explain, example, attention } = req.body;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        })

        if (!currentLesson) {
            return res.json({
                message: "Lesson not found"
            })
        }

        if (!vocabulary || vocabulary.length === 0) {
            return res.json({
                message: "Vocabulary is not valid",
                data: null
            })
        }

        if (!explain || explain.length === 0) {
            return res.json({
                message: "Explain is not valid",
                data: null
            })
        }

        if (!example || example.length === 0) {
            return res.json({
                message: "Example is not valid",
                data: null
            })
        }

        if (!attention || attention.length === 0) {
            return res.json({
                message: "Attention is not valid",
                data: null
            })
        }

        const newGrammar = await Grammar.create({
            vocabulary,
            explain,
            example,
            attention,
            lesson_id: currentLesson.lesson_id
        })

        return res.json({
            message: "Grammar create successfully",
            data: newGrammar
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update grammar
router.put('/grammars/:grammarId', checkAuth, async (req, res) => {
    try {
        const grammarId = req.params.grammarId;

        const currentGrammar = await Grammar.findOne({
            where: {
                grammar_id: grammarId
            }
        })

        if (!currentGrammar) {
            return res.json({
                message: "Grammar not found",
            })
        }

        const { vocabulary, explain, example, attention } = req.body;

        const updateGrammar = await Grammar.update({
            vocabulary,
            explain,
            example,
            attention,
        },
            {
                where: {
                    grammar_id: currentGrammar.grammar_id
                }
            }
        );

        return res.json({
            message: "Grammar update successfully",
            data: updateGrammar
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete grammar
router.delete('/grammars/:grammarId', checkAuth, async (req, res) => {
    try {
        const grammarId = req.params.grammarId;

        const deleteGrammar = await Grammar.destroy({
            where: {
                grammar_id: grammarId
            }
        });

        if (!deleteGrammar) {
            return res.json({
                message: "Grammar cannot be deleted"
            });
        }

        return res.json({
            message: "Delete successfully",
            data: deleteGrammar
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all quiz preset
router.get('/quiz-presets', checkAuth, async (req, res) => {
    try {
        const quiz_preset = await Quiz_Preset.findAll();

        if (!quiz_preset) {
            return res.status(404).json({
                message: "Quiz preset not found"
            })
        }

        return res.json({
            message: "Quiz preset found",
            data: quiz_preset
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new quiz preset
router.post('/quiz-presets', checkAuth, async (req, res) => {
    try {
        const { number_of_questions, quiz_time } = req.body;

        if (!number_of_questions || number_of_questions === 0) {
            return res.json({
                message: "Number of question is not valid",
                data: null
            })
        }

        if (!quiz_time) {
            return res.json({
                message: "Quiz time is not valid",
                data: null
            })
        }

        const newQuizPreset = await Quiz_Preset.create({
            number_of_questions,
            quiz_time
        })

        if (!newQuizPreset) {
            return res.json({
                message: "Cannot add new preset",
                data: null
            })
        }

        return res.json({
            message: "Quiz preset create success",
            data: newQuizPreset
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//edit a quiz preset
router.put('/quiz-presets/:presetId', async (req, res) => {
    try {
        const presetId = req.params.presetId;

        const { number_of_questions, quiz_time } = req.body;

        const editPreset = await Quiz_Preset.update({
            number_of_questions,
            quiz_time,
        }, {
            where: {
                preset_id: presetId
            }
        });

        if (!editPreset) {
            return res.status(400).json({
                message: "Preset cannot be edited"
            })
        }

        return res.json({
            message: "Preset update success",
            data: editPreset
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete a quiz preset
router.delete('/quiz-presets/:presetId', async (req, res) => {
    try {
        const presetId = req.params.presetId;

        const deletePreset = await Quiz_Preset.destroy({
            where: {
                preset_id: presetId
            }
        })

        if (!deletePreset) {
            return res.status(400).json({
                message: "Preset cannot be deleted"
            })
        }

        return res.json({
            message: "Preset delete success",
            data: deletePreset
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//Choose a preset for student quiz
router.patch("/quiz-presets/:presetId", async (req, res) => {
    try {
        const presetId = req.params.presetId;

        const { is_chosen } = req.body;

        const choosePreset = await Quiz_Preset.update({
            is_chosen: is_chosen
        },
            {
                where: {
                    preset_id: presetId
                }
            }
        );

        return res.json({
            message: "Preset chosen success",
            data: choosePreset
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

module.exports = router;