/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        links: [
            { route: "/", title: "MenuHome" },
            { route: "/about", title: "MenuAboutUs" },
            { route: "/contacts", title: "MenuContacts" },
          ]
    };
}