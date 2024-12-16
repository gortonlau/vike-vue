I introduced keepalive in /layouts/LayoutDefault.vue to ensure state persistence between pages. However, in my tests, it has not achieved the expected effect. The same code does not have this issue in a standalone Vue project. I named the page components using the name option and tested, but it still did not achieve the desired effect.

My expected outcome is that the state should be preserved after page navigation, rather than the data being lost. I am more familiar with traditional development like C++ and assembly, and not particularly experienced with front-end development. Please forgive my ignorance.

