export function all() {
  return fetch('/jobs')
  .then(res => res.json())
  .catch(error => {console.log(error)})
}

export function save(job) {

  return fetch('/jobs.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  .then(res => res.json())
  .catch(error => {console.log(error) })
}
