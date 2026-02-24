1. getElementById vs getElementsByClassName vs querySelector / querySelectorAll

        <!-- getElementById("id") -->
        This method selects a single element using its unique id.
        Since an id should only exist once on a page, this always returns one element or null.

        <!-- getElementsByClassName("class") -->
        This method selects all elements that have the given class name.
        It returns a live collection, meaning if elements with that class are added or removed, the result updates automatically.

        <!-- querySelector("selector") -->
        This method uses CSS selector syntax and returns the first matching element.
        It is more flexible because you can select by id, class, tag, or complex selectors.

        <!-- querySelectorAll("selector") -->
        This method also uses CSS selectors but returns all matching elements.
        It returns a static list, so it does not update when the DOM changes.
        
2. Creating and inserting a new element into the DOM

        To add a new element to the page, you first create it in JavaScript
        Then you add content or attributes to it.
        Finally, you insert it into the DOM so it becomes visible on the page.

3. Event Bubbling

        When an event happens on an element, it does not stay only on that element
        The event first runs on the element that was clicked.
        Then it moves up to the parent element, then to higher parents until it reaches the document.
        This behavior is called event bubbling.

4. Difference between preventDefault and stopPropagation
        preventDefault controls browser behavior
        stopPropagation controls how the event travels through the DOM