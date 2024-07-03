### STEP BY STEP Tutorial
```
npx create-next-app@latest .
npx shadcn-ui@latest init
```

#### Custom tailwindcss color
```javascript
//Tailwindcss.config.js
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          100: "#000319",
        },
      },
    },
  },
  ```

```
justify-center = Place items in the center horizontally
items-center = Place items in the center vertically
overflow-hidden = Hide scroll bars
```


#### Acerternity UI library
`npm i framer-motion clsx tailwind-merge`


```javascript
//tailwind.config.ts
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
```

`npm install mini-svg-data-uri`

```javascript
//tailwind.config.ts
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },

```

Add spotlight to components/ui/spotlight.tsx
Make a hero.tsx component in components/hero.tsx

Add Grid and Dot Background from Acerternity UI

### Install and Add dark theme
`npm install next-themes`

Follow dark theme install guide from shadcn

#### Text Generate Effect
Add Text generate effect from Acertinity UI

`I&apos;m = I'm`

