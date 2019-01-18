

## Frontend React Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more info here.

### Naming conventions

**Filename:** Use PascalCase for filenames

// **bad**
```import reservationCard from './ReservationCard';```
// **good**
```import ReservationCard from './ReservationCard';```

### Components
Components live in the component folder and each component has it's own dedicated folder. Each folder has it's own style folder where the styles from the component will sit.

### Props

Always use camelCase for prop names.

// **bad**
        ```
        <Foo
          UserName="hello"
          phone_number={12345678}
        />
        ```
// **good**
    ``` 
    <Foo
         userName="hello"
         phoneNumber={12345678}
    />
    ```
        
Always include an alt prop on <img> tags. If the image is presentational, alt can be an empty string or the <img> must have role="presentation"

// **bad**
```<img src="hello.jpg" />```
// **good**
```<img src="hello.jpg" alt="Me waving hello" />```

### Styling

This boilerplate uses [styled components](https://www.styled-components.com/). There are global styles in the theme folder. Component based styles are in the styles folder in that components folder. You should follow the same principales as the grunt boilerplate when writing your SCSS

