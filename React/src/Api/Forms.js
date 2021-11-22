

function GetAPIForm(id,callback) {
  const url = "https://localhost:44349/Api/Home/hola";

  fetch(url, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        const err = new Error();
        err.message = "Error while reciveiving data";
        return callback(err);
      }
      //console.log(data);
      return callback(null,data) ;
    })
    .catch((ex) => {
      //console.log(ex);
      const err = new Error();
      err.message = "Error by exception ";
      return callback(err);
    });
}
export const GetForms = (id) => {
  return new Promise((resolve, reject) => {
    try {
      GetAPIForm(id, (err, Form_response) => {
        if (err) return reject(err);
        return resolve(Form_response);
      });
      //resolve(token);
    } catch (err) {
      reject(err);
    }
  });
};
