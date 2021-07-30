import React, {useState,useEffect} from 'react';

function Create() {
  const [title, setTitle] = useState("");
  const [questionImageSrc, setQuestionImageSrc] = useState("");
  const [questionImageAlt, setQuestionImageAlt] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [answerProposal, setAnswerProposal] = useState(["","","",""]);

  function notNegative(e,i){
    if(i>=1) e(i);
  }

  document.title = "Quiz | Create"
  return (
      <div className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="h-auto w-2/3 flex flex-col shadow p-4 m-4 bg-white rounded">
          <h2 className="text-center font-bold text-5xl mb-4">Question</h2>
          <label className="grid grid-cols-12 font-medium text-xl my-4 mx-16 gap-4 items-center">
            <span className="col-span-2 text-right">Titre</span>
            <input className="col-span-10 border rounded"
                   type="text" name="title"
                   value={title} onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <label className="grid grid-cols-12 font-medium text-xl my-4 mx-16 gap-4 items-center">
            <span className="col-span-2 text-right">Image</span>
            <input className="col-span-5 border rounded px-1"
                   type="text" name="questionImageSrc" placeholder="Src"
                   value={questionImageSrc} onChange={(e) => setQuestionImageSrc(e.target.value)}/>
            <input className="col-span-5 border rounded px-1"
                   type="text" name="questionImageAlt" placeholder="Alt"
                   value={questionImageAlt} onChange={(e) => setQuestionImageAlt(e.target.value)}/>
          </label>
          <label className="grid grid-cols-12 font-medium text-xl my-4 mx-16 gap-4 items-top">
            <span className="col-span-2 text-right">Text</span>
            <textarea className="col-span-10 border rounded px-1"
                      name="questionText" placeholder="Ma question"
                      value={questionText} onChange={(e) => setQuestionText(e.target.value)}/>
          </label>
        </div>
        <div className="h-auto w-2/3 flex flex-col shadow p-4 m-4 rounded bg-white">
          <h2 className="text-center font-bold text-5xl mb-4">Réponses</h2>
          <label className="grid grid-cols-12 font-medium text-xl my-4 mx-16 gap-4 items-center">
          {answerProposal.map((value, i) =>
              <input className={`col-span-6 border rounded px-1`}
                     type="text" name={`ap-${i}`} placeholder={`Réponse ${i+1}`}
                     key={`ap-${i}`} value={answerProposal[i]}
                     onChange={(e) => {
                       let list = answerProposal;
                       list[i] = e.target.value;
                       console.log(list);
                       setAnswerProposal(list);
                     }}/>
            )}
          </label>
        </div>
        <div className="h-auto w-2/3 flex flex-col shadow p-4 m-4 bg-white rounded">
          <h2 className="text-center font-bold text-5xl mb-4">Explication</h2>
        </div>
      </div>
  );
}

export default Create;
