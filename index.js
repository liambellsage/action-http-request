const core = require('@actions/core')
const github = require('@actions/github')

try {
  const url = core.getInput('url')
  const method = core.getInput('method')
  const contentType = core.getInput('contentType')
  const body = core.getInput('body')

  fetch(url, {
    method,
    headers: { 
      "Content-Type": contentType
    },
    body: body && JSON.stringify(body)
  })
  .then((response) => {
    core.setOutput("status-code", response.status);
    return res.text()
  })
  .then((text) => {
    core.setOutput("body", text);
  })

} catch (error) {
  core.setFailed(error.message);
}