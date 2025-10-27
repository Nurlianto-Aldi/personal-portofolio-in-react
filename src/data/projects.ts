export interface ProjectContent {
  type: "text" | "subHeader" | "image" | "video" | "list";
  text?: string;
  src?: string;
  alt?: string;
  items?: string[];
}

export interface ProjectList {
  id: number;
  title: string;
  thumbnail: string;
  tools: string[];
  desc: string;
  projLink: string;
  content: ProjectContent[];
}

export const projectList: ProjectList[] = [
  {
    id: 1, 
    title: "Personal Portfolio", 
    thumbnail: "/Screenshot 2025-10-24 at 12.19.25 PM (1).png",
    tools: ["Next.js 15", "Tailwind CSS", "TypeScript", "Figma", "Vercel"],
    desc: "Personal showcase built on the Next.js App Router for maximum performance and superior SEO. Features comprehensive project overviews and a clean, responsive layout tailored for large screens.",
    projLink: "https://nurlianto-aldi.vercel.app/",
    content: [
      {
        type: "text", 
        text: "I developed this personal portofolio as a showcase of my capabilities and past project. I design this website from scratch and trying to make it light and fast, ensuring anyone who want to know about me through this website experience zero loading friction."
      }, {
        type: "subHeader",
        text: "Concept & Structure"
      }, {
        type: "text",
        text: "The project began with a sketch on my notebok, where i focusing on a desktop-first. The structure will have three sections :"
      }, {
        type: "list",
        items: [
          "ABOUT : provides a brief professional introduction and background",
          "PROJECTS : lists my most recent project and relevant work",
          "DARK MODE : a feature to turn the web into a DARK MODE. Or is it? It have some easter egg that you should check out. C'mon, try the dark mode",
        ]
      }, {
        type: "image",
        src: "/20251024_114510 (1) (1).jpg",
        alt: "The original sketch"
      }, {
        type: "subHeader",
        text: "Development & Deployment"
      }, {
        type: "text",
        text: "After the skecthes, i build the prototype using Figma, creating the layout. I add the standard for the typography, element size, and responsive breakpoints. I also create the mobile version so the web can still flawlessly beatiful when opened on mobile phone."
      }, {
        type: "image",
        src: "/Screenshot 2025-10-24 at 12.19.25 PM (1).png",
        alt: "Making the prototype on Figma"
      }, {
        type: "text",
        text: "Finally, i turn the prototype into code through code editor. I choose to use Next.js for scalability and optimal SEO performance, Tailwind CSS for easy styling, and TypeScript to make it a little bit fancy. Then when everything is done, i deploy it on vercel (of course, duh) and use custom domain from Niagahoster."
      }, {
        type: "image",
        src: "/Screenshot 2025-10-24 at 12.19.44 PM (1).png",
        alt: "Upload it on Vercel with custom domain"
      }, {
        type: "subHeader",
        text: "Conclusion"
      }, {
        type: "text",
        text: "To sum up, i sketch the design on the notebook, turn it into prototype on Figma, realize it with Next.js with Tailwind CSS and TypeScript, and lastly deploy it on Vercel with custom domain from Niagahoster."
      }
    ]
  }, {
    id: 2, 
    title: "To-do List in React", 
    thumbnail: "/Screenshot 2025-10-27 at 5.01.19 AM (1).png",
    tools: ["React.js", "Tailwind CSS", "Vercel"],
    desc: "Showing my capabilities to manipulate virtual DOM through React.js.",
    projLink: "https://to-do-list-in-react-five.vercel.app/",
    content: [
      {
        type: "text", 
        text: "One of the main feature of React.js is virtual DOM, it's like you have a little note and validate it before you can actually implement it on your notebook. And how to manipulate the virtual DOM is a must skill you need to have to mastering the React. Lucky for me, i already have that skill, and to prove that i built this project to showcase my capabilities to manipulate virtual DOM in React."
      }, {
        type: "text",
        text: "What is the difference between manipulating the DOM with vanilla JavaScript and React? "
      }, {
        type: "list",
        items: [
          "First, in React, you don't have to struggle with manipulating every single element of the html using `getElement`. Give that boring task to React, it smart enough to do that. Instead, you will struggle with state, a `memory` for the data that will be shown. ",
          "Second, because you work with the state, your will mainly focus on how to manipulate that state (since the visual render already done by React). Like adding things to your state, filtering your state data, edit your data, etc.",
          "Third, you will see a much faster loading of your project in your browser. This is because the virtual dom features from React, where the browser only render a change in your project instead rendering every component from the start.",
        ]
      }, {
        type: "image",
        src: "/Screenshot 2025-10-27 at 6.00.23 AM (1).png",
        alt: "The code and the structure folder"
      }, {
        type: "text",
        text: "In a nutshell, the core concept of vanilla JavaScript and using it with React is actually the same. You just have to implement it in a different way to have the same result. And there is nothing fancy about this project, i don't even use TypeScript so i cna focus on the structure."
      }, {
        type: "image",
        src: "/Screenshot 2025-10-27 at 5.01.19 AM (1).png",
        alt: "The output"
      },
    ]
  }, 
]
