import React from 'react';

const GrammerDetail = () => {
  return (
    <div className="mb-3 p-3 border rounded">
      <h5>
        Grammar Detail
      </h5>
      <p className="border-left-red-lg pl-2 my-3 text-danger font-weight-bold">
        ~ から　~ まで : Từ ~ Đến ~
      </p>
      <div className="description bg-light p-3">
        <h5>
          Explain
        </h5>
        <p>
          Là phó từ biểu thị mức độ.khi làm chức năng bổ nghĩa cho đồng từ thì chúng được đặt trước động từ.
        </p>
        <p>
          Mang ý nghĩa hoàn toàn...không, thì luôn đi với câu phủ định.
        </p>
        <h5>
          Example
        </h5>
        <p>
          お金が全然ありません。Tôi không có tiền.
        </p>
        <p>
          全然分かりませんTôi hoàn toàn không hiểu.
        </p>
        <h5>
          Attention
        </h5>
        <p>
          全然」Còn có thể dùng bổ nghĩa cho tính từ
        </p>
        <p>
          Ví dụ: この本は全然面白くないです。Cuốn sách này không hay chút nào
        </p>
      </div>
    </div>
  )
}

export default GrammerDetail;
