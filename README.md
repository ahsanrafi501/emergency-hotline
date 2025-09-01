# JavaScript DOM Notes

## 1. getElementById vs getElementsByClassName vs querySelector / querySelectorAll

- **getElementById**: selects **one element** by its ID only.  
- **getElementsByClassName**: selects **all elements** with the same class, returns a **list**.  
- **querySelector**: selects the **first element** that matches any CSS selector.  
- **querySelectorAll**: selects **all elements** that match a CSS selector, returns a **list**.  

## 2. Creating and Inserting a New Element in the DOM

1. Create a new element in memory.  
2. Add text or content to it.  
3. Append it to a parent element in the HTML page.  

## 3. Event Bubbling

- When you click on an element, the event **travels up** from the child to its parent, then grandparent, and so on.  

## 4. Event Delegation

- Attach a single event listener to a parent element instead of many children.  
- Check which child was clicked inside the event.  
- **Useful:** saves memory and works for dynamically added elements.  

## 5. preventDefault() vs stopPropagation()

- **preventDefault()**: stops the default action of an element (e.g., a link won’t open).  
- **stopPropagation()**: stops the event from bubbling up to parent elements.
