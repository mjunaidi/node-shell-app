function exec(id,ip) {
  const url = `/exec/${id}/${ip}`
  fetch(url).then(res=>{
    console.log('exec')
    if (res.ok) {
      res.text().then(data=>{
        console.log(data)
        window.location.href = 'quickview.html'
      }).catch(err=>{
        console.warn(err)
      })
    } else {
      console.warn('response not ok')
    }
  }).catch(err=>{
    console.log(err)
    console.warn(err)
  })
}
