It is possible to create a new DOM element with Javascript with the function createElement.

After you create any element, you have to add it to the website DOM if you want to display it. it inside of the website, to add the element to the DOM we use the function appendChild.

    let elem = document.createElement("H1");
    elem.innerHTML = "Hello World";
    document.body.appendChild(elem);


Note: the innerHTML property of any DOM element is used to set the HTML content that is going to be set inside of that HTML TAG.

Instructions
Using the createElement function, create a Paragraph element with yellow background, set the innerHTML to 'Hello World' and append it at the end of the document.

Hint:
- Create a P element
- Use de createTextNode to set Hello World
- Remember to setup the yellow style
- Append child to the document