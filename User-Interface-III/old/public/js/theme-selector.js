// -This code sets event listeners on the different buttons in the color-theme-picker
//  and then sets the background to the corresponding theme color.
// -I realize this is far more complicated than it needs to be but I was 
//  figuring out how to do this while I coded it.
// -Next time I will try to plan this out better ahead of time!!!
const elem = name => document.getElementById(name);
const setup_theme_callback = (num, color) => {
    elem(`theme-${num}`).addEventListener('click', () => {

        // Grab the constant values for background, border, and box-shadow-glow:
        // (Overly-complicated: Could just store these vals in javascript arrays!)
        const [background, border, glow] = ((color) => {
            const val = (var_name) => getComputedStyle(document.documentElement)
            .getPropertyValue(var_name);

            const background = val(`--background-color-${color}`);
            const border = val(`--border-color-${color}`);
            const glow = val(`--glow-color-${color}`);
            return [background, border, glow];
        })(color);

        // Set background color:
        elem('body').style.backgroundColor = background;

        // Turn off all other active-classes:
        for(let i = 1; i <= 8; ++i)
            elem(`theme-${i}`).classList.remove('Active-Theme');

        // Now set the single active-class:
        console.log(elem(`theme-${num}`));
        elem(`theme-${num}`).classList.toggle('Active-Theme');

        // Set the new css-variable value (used a function just to try to explain what the code is doing):
        const set_css_var_val = (css_var_name, new_val) => {
            document.documentElement.style
                .setProperty(css_var_name, new_val);
        };
        // const get_css_var_val = (css_var_name) => {
        //     const css_var_val = getComputedStyle(document.documentElement)
        //     .getPropertyValue(css_var_name);
        //     return css_var_val;
        // };
        set_css_var_val(`--glow-color-primary`, glow);
    });            
};
const colors = ['blue', 'yellow', 'pink', 'green', 'purple', 'tan', 'grey', 'brown'];
for (let i = 1; i <= colors.length; ++i)
    setup_theme_callback(i, colors[i - 1]);