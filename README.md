Used Packages

API Fetch - Axios (https://axios-http.com/docs/intro)
Routes - React Router DOM (https://reactrouter.com/en/main)
Animation - React Awesome Reveal & Framer Motion (https://react-awesome-reveal.morello.dev/ & https://motion.dev/)
State management - Redux Toolkit (https://redux-toolkit.js.org/)
Validation - Formik & Yup (https://formik.org/docs/guides/validation & https://www.npmjs.com/package/yup)
Carousel - React Slick (https://react-slick.neostack.com/) & Splide (https://splidejs.com/)
CSS Framework - Tailwind (https://tailwindcss.com/) & Emotion (https://emotion.sh/docs/introduction)
UI Components - MUI & Styled Components (https://mui.com/material-ui/all-components/ & https://styled-components.com/)
Icons - MUI Icons & React Icons (https://mui.com/material-ui/material-icons/ & https://react-icons.github.io/react-icons/)
Charts - HighchartsRecharts (https://www.highcharts.com/ & https://recharts.org/en-US)
Internationalization (i18n) & Translation - react-i18next (https://react.i18next.com/) & Transformers.js (https://huggingface.co/docs/transformers.js/en/index)
Date & Time Format - DayJs & Moment (https://day.js.org/ & https://momentjs.com/)
Calender - Prime React Calender (https://primereact.org/calendar/)
Pills - Pilling.js (https://piling.js.org/docs/)
InfiniteScroll - React Infinite Scroll (https://www.npmjs.com/package/react-infinite-scroll-component)
MasonryLayout - React Responsive Masonry (https://www.npmjs.com/package/react-responsive-masonry)
Scroll - GSAP (https://gsap.com/resources/React/) & Lenis (https://lenis.darkroom.engineering/)
Error Boundary - React error boundary (https://www.npmjs.com/package/react-error-boundary)
Logs - Sentry (https://docs.sentry.io/platforms/javascript/guides/react/)
Visualization - Virtualized (https://www.npmjs.com/package/react-virtualized) & Virtuoso (https://www.npmjs.com/package/react-virtuoso)
Throttling and debouncing - Lodash (https://lodash.com/)




React Pro & Clean Code

1. Use CONST declare only for freeze and could't changed values & make it captialize.
2. Single Responsibility Components and Principal [helpers & utils].
3. * Destructed Props.
    const {data, name} = props
    const ComponentName = ({data, name}) => {}
4. * Make sure resuable, sepreate, scable and dynamic components. Code splitting (Split small small components into 
   diff files).
5. Reusable functions.
   Without parameter <button onClick={handleSubmit}>Submit</button>
   With parameter    <button onClick={() => handleSubmit()}>Submit</button>
6. Implement 404 page component and route for error & invalid page.
7. * Lazy loading - Lazy, Suspense.
8. * Unique key values in map() method through index or unique id.
9. * Using component props types (prop-types).
10. Default boolean
    Don't - title == true
    Do - title, !title
11. Common functions returns use custom hooks (api fetch, global exception handling).
12. Don't write inline css, make it an object or module or using styled-component, stylex, emotion libraries.
13. Avoid props drilling - Use contextAPI, State management, React Query, Component Composition.
14. Avoid direct state value modification
    Don't - setCount(count + 1)
    Do - SetCount(prev => prev + 1)
15. Asynchronous (async/await & promise)
16. Use fragement tag or empty fragement <></> for wrapping element
17. Component error handling using Error Boundary
18. * Component Optimization & Memoization - using React.memo and Memoization of value using useMemo()
19. * Effective state mangement through Redux 
20. * Testing & Debugging
21. * Code consistency and formatting (Esling, Prettier and Husky(Git))
22. Good folder structure & separation of concerns
23. DRY & WET principles
24. Proper naming component, function, const, variable, class (snake_case, PascalCase, camelCase)
25. * Functional component, arrow function, spread operator
26. Structured imports - first external packages imports after local files imports
27. Logs - Sentry or console.log
28. useReducer instead of useState
29. There is no children in between the element
    Don't - <input></input>
    Do - <input />
30. * Component Design Patterns
31. In redux reducer don't use switch statement, use object
32. Image loading use observers
33. Don't be so much function some simple updates, Do like this scenario inline onClick={() => setCount(prev => prev +1)}
34. Use profiler
35. Implement React server-side rendering (SSR)
36. Virtualize lists using Virtuoso or Virtualized
37. Implement Throttling and debouncing
38. Preventing XSS attacks
39. HOC & Render props
