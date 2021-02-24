import Home from "./views/Home.js";
import Projects from "./views/Projects.js";
import Resume from "./views/Resume.js";

const loadViews = url => {
    history.pushState(null, null, url);
    router();
}



const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/projects", view: Projects },
        { path: "/resume", view: Resume },
    ];

    const pathFound = routes.map(route => {
        return {
            route: route,
            isFound: location.pathname === route.path
        };
    });

    let foundPath = pathFound.find(pathe => pathe.isFound);
    if (!foundPath) {
        foundPath = {
            route: routes[0],
            isFound: true
        }
    }

    const view = new foundPath.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();

    

    
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            loadViews(e.target.href);
        }
    });
    router();
});
