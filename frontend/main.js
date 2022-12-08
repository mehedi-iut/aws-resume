window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount()
})

//const functionApiUrl = 'https://getmyresumecounter.azurewebsites.net/api/GetResumeCounter?code=lgiQjdl4Vb55Yl0i35nhLnmalOy5Iu0nqxv1Gu1Ojp84OMnm7ulZvw=='
//const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter'
const localfunctionApi = 'http://localhost:7071/api/myresume'
const pythonFunctionUrl = 'https://pythonresumecounter.azurewebsites.net/api/myresume?code=yiyozTBbp0wwUI3sYddpZGmIapm97muZHphdnR9RsDVju/p1vToMjQ=='

const getVisitCount = () => {
    let count = 30
    fetch(pythonFunctionUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.")
        count = response.count
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error)
    })
    return count
}



// activate animation while scrolling down
// Create the observer
const observer = new IntersectionObserver(entries =>{
    // Loop over the entries
    entries.forEach(entry => {
        const python = entry.target.querySelector('.python-bar')
        const azfun = entry.target.querySelector('.azfun-bar')
        const k8s = entry.target.querySelector('.k8s-bar')
        const docker = entry.target.querySelector('.docker-bar')
        const prometheus = entry.target.querySelector('.prometheus-bar')
        const grafana = entry.target.querySelector('.grafana-bar')
        // if the element is visible
        if (entry.isIntersecting){
            // Add the animation class
            // entry.target.classList.add('python-bar')
            python.classList.add('python-animation')
            azfun.classList.add("azfun-animation")
            k8s.classList.add("k8s-animation")
            docker.classList.add("docker-animation")
            prometheus.classList.add("prometheus-animation")
            grafana.classList.add("grafana-animation")
            return
        }

        // We're not intersecting, so remove the class!
        python.classList.remove('python-animation')
        azfun.classList.remove("azfun-animation")
        k8s.classList.remove("k8s-animation")
        docker.classList.remove("docker-animation")
        prometheus.classList.remove("prometheus-animation")
        grafana.classList.remove("grafana-animation")
    })
})

// Tell the observer which elements to track
observer.observe(document.querySelector('#skills'))