//I want to render an A tag inside root
// this is how react sees the elements

function customRender(reactElement, container){
    // creating DOM element
    const domElement = document.createElement(reactElement.type)
    // element bana toh liya par uske andar bharo
    //pehle inner HTML change ki
    domElement.innerHTML = reactElement.children
    // fir tags change kiye
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    // container mai append kar diya fir 
    container.appendChild(domElement)
}

const reactElement ={
    type: 'a',
    props: {
        href: "www.google.com",
        target: '_blank'},
    children: 'Click me to visit again'
} 

const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)
