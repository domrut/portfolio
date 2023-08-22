function test () {
    fetch("https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
test();