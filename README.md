# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# NOTES BOOTCAMP

# Hello React

Basic examples to understand React

## How to run

Este comando lo que hace es levantar un servidor estático en http://localhost:3000/

```
npx browser-sync start --server --files "./*.html" --no-notify --directory
```


Vamos hacer una aplicacion con React, en esta página encontramos toda la informacion https://create-react-app.dev/docs/getting-started


Con Vite sería similar  https://vitejs.dev/guide/  

Si lo instalaras con `vite`, está muy de moda esta empaquetador y podemos usarlo para construir nuestra app tbn

```sh
nmp create vite@latest
```

### Creamos aplicacion

Arranco el servidor `sparres.js` para conectar con el `front` lo usaremos como apoyo al backenk porque haremos un clon de twetter apoyado en este servidor.

```sh
➜  sparrest.js git:(main) ✗ npm start

> sparrest@1.0.0 start
> node index.js

JSON Server is running on port 8001
```

Ejecutams de manera global desde mi carpeta raiz de la app, la app la llamaré `twitter-react`

```sh
npx create-react-app twitter-react
cd twitter-react
npm start
```


veamos **twitter-react/package.json**

```js
  "scripts": {
    "start": "react-scripts start", // arranca el entorno de desarrollo
    "build": "react-scripts build", // hace la compilacion
    "test": "react-scripts test", // arranca el entronde testing preparado y herramientas actuales
    "eject": "react-scripts eject" // todo lo que hace react está encondido en este paquete "react-scripts"
    // Si yo quiero tocar la config de webpack no podemos, pero en algún caso si queremos
    // "eject" este comando lo ejecuto y react saca a la luz toda la configuracion para modificarla
```

Arrancamos con el comando de desarrollo y arranca en e puerto 3000, lo puedes cambiar si quieres,busca en la doc

```sh
npm run start
```

nos ha creado las carpetas del proyecto, si nos metemos en public veremos `twitter-react/public/index.html` vacío 

```sh
public
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

donde en la linea 31 `<div id="root"></div>` se va a enganchar el fichero de `js` codigo que vayamos generando

```html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>

```

nosotros en principio no hemos de tocar nada. Con el codigo que tiene de punto de entrada en `twitter-react/scr/index.js` generará el codigo que engancha en el html.

```sh
scr
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```
El punto de entrada en el `index,js` tenemos un componente principal que es lo que va a renderizar, está importándose desde el fichero `./App` el componenete `app` y es lo que vamos a renderizar. Está **envuelto** en un componenete de React que se llama `<React.StrictMode>`; este un un componenete d ela librería React que hace unos ciertos chequeos para ver si estamos utilizando react como debemos, nos lanzará si usamos metodos deprecados, warnings si nos dejamos algo, etc Si es un incordio lo puedes quitar.Cuando estés modo produccion desaparece.

```html
  <React.StrictMode>
    <App />
  </React.StrictMode>
```

Si nos metemos en el componente principal `App.js` está importando un logo `.svg`
```js
import logo from './logo.svg';

<img src={logo} className="App-logo" alt="logo" />
```
que se la pasa al `src` le pasa una url. Si lo hicieras a mano sería vastante complejo pero lo hace webpack por debajo. Lo mismo para el `App.css` . Por lo demás el **componente** App() es bastante sencillo, si modificas cosas las verás en el browser al momento.

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
---

### Listas

Voy a quitar `App.css` porque vamos a crearnos nuestro fichero nosotros. Voy a modificar ahora `App.js` dejando sólo lo siguiente dentro:

```js
function App() {
  return (
    <div className="App">
        <h1>
          Keepcoder´s! Don´t forget to learn React!
        </h1>
    </div>
  );
}

export default App;
```

elimino `reportWebVitals.js` y quito el `import reportWebVitals from './reportWebVitals';` de `index.js`


---

Vamos a crear un listado de tweets

Vamos al componente `App.js`

Creo carpet `scr/pages` que iremos almacendao nuestras paginas, dividiremos las páginas por concepto de productos `scr/pages/tweets` y me creo un `tweets.js`para meter el componente de listado de tweets, un componente solo es una funcion:

```js
// listado de tweets
const tweets = [
  {
    content:
      "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
    userId: 1,
    updatedAt: '2021-03-15T18:23:57.579Z',
    id: 1,
  },
  {
    content:
      "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
    userId: 1,
    updatedAt: '2021-03-15T18:24:56.773Z',
    id: 2,
  },
];

// con esto ya me saca los tweets por pantalla
function TweetsPage() {
    return (
    <div>
      <ul>
          <li>{tweets[0].content}</li>
          <li>{tweets[1].content}</li>
      </ul>
    </div>
  );
}

// lo exporto
export default TweetsPage;
```


Me voy al componente `src/App.js` y me importo `tweets.js` colocando el componente para que lo pinte `<TweetsPage></TweetsPage>`

```js
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
  return (
    <div className="App">
          <TweetsPage></TweetsPage>
    </div>
  );
}

export default App;
```

Pero esta no es la manera 

```js
        <li>{tweets[0].content}</li>
        <li>{tweets[1].content}</li>
```

Vamos a mirar como se renderizan listas. Si tienes un array de datos como el array `const tweets` y quieres transformarlo en un array de elementos. Com map vamos a randerizar listas:

```js
function TweetsPage() {
    return (
    <div>
      <ul>
        {
            tweets.map(tweet => (<li>{tweet.content}</li>))
        }
      </ul>
    </div>
  );
}
```

Ahora bien, cuando estas haciendo listas y cambios y millones de lineas, si le pones un identificados React no te dará problemas. Siempre que tengas un map o listas, el elemento revuelto ha de tener una `key id`.

```js
function TweetsPage() {
    return (
    <div>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

### Aplicando estilos

Vamos hacer un stylo básico en la lista con atributo `className` simplememnte definiendo dentro de `<div className="tweetsPage">` el atributo con el nombre ya vale, luego lo definimos el css y listo


```js
function TweetsPage() {
    return (
    <div className="tweetsPage">
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```
Defino `scr/TweetsPage.css`

```css
.tweetsPage {
    color: red
}
```

para incorporar el estilo css lo importas en la página `TweetsPage.js` así `import './TweetsPage.css'` . En ese momento se ha incorporado en la página porque coincide la clase. Esto lo permite Webpacj, no React.

Podríamos complicar este css y le podríasmos aplicar **condicionalmente** que si la clase es `dark` (añado variable booleana `dark`) si no aplica `light` --> lo podemos hacer porque tenemos acceso a JS `<div className={'tweetsPage'${dark ? 'dark' : 'light'}'}>`

```js
const dark = true;

function TweetsPage() {
    return (
    <div className={`tweetsPage'${dark ? 'dark' : 'light'}`}>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

te vas `` y le aplicas un estile nuevo

```css
.tweetsPage {
    color: red
}

.dark {
    background-color: aliceblue;
    color:aqua;
}
```

por cada valor se aplicará un estilo u otra . Imagínate que en vez de llegar por una variable llega por una propiedad.  `function TweetsPage({ dark }) {}`

```js
const dark = true;

function TweetsPage({ dark }) {
    return (
    <div className={`tweetsPage'${dark ? 'dark' : 'light'}`}>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

Si llega desde una prop imaginate que yo la puedo pasar desde `Àpp.js` desde el componente lo podemos controlar `<TweetsPage dark={false}>`. Le quitas la variable `const dark = true;` y se la pasas por el coponente

```js
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
  return (
    <div className="App">
          <TweetsPage dark={false}/>
    </div>
  );
}

export default App;
```

cuando son atributos bool¡anos puedes escribirlo así `<TweetsPage dark={false}>` o así `<TweetsPage dark/>`. Esto `<div className={'tweetsPage'${dark ? 'dark' : 'light'}'}>` se podría complicar mucho, por esto es bueno que te mires estas librerías

https://github.com/JedWatson/classnames

https://github.com/lukeed/clsx

Estas librerías permiten construir string pero con clases complejas podemos usar las utilidades `usage` de git


```sh
npm install --save clsx
```
`import clsx from 'clsx';` en `TweetPAge.js`

creas la variable `const className = clsx("tweetsPage", {dark: dark, light: !dark})` y se la pasas así `<div className={className}> `


```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
const className = clsx("tweetsPage", {dark: dark, light: !dark})
return (
    <div className={className}> 
    <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
    </ul>
    </div>
);
}
```

Entonces desde `App.js` en `<TweetsPage dark={false}/>` lo que le pases debe fucncionar igual. 

Has de tener cuidado porque hemos puesto en `TweetsPage.css` por ejemplo nada me impide que otro componente tuviera una clase que se llamara igual que `.tweetsPage` en el css y sobreescriba. Webpack lo que hace es meterlo todo en un css general y gana el ultimo. 

```css
.tweetsPage {
    color: red
}

.dark {
    background-color: aliceblue;
    color:aqua;
}
```

Para evitar colisiones hay una tecnica que se llama `module.css` que por cada clase que definas en ese fichero de aplicará un hashunico que te evitará colisiones de clases. Simplemente te creas un nuevo fichero `TweetsPage.module.css` y metes tus calses. Y ahora la aplicas:


```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
    //const className = clsx("tweetsPage", {dark: dark, light: !dark})
    const className = clsx(styles.tweetsPage, {[styles.dark] : dark})
    return (
        <div className={className}> 
        <ul>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                    ))
            }
        </ul>
        </div>
    );
}
```
fíjate que estmos sacando de `styles` los nombres de las clases que etsamos importanto `import styles from './TweetsPage.module.css'` yo se que está dentro de styles y crea un atributo con o que tenga dentro la varibale.



**estilos inline**


cada elemento html tu le puedes pasar un style. `<ul style={{ color: red; border: 1px solid }}>` Esto lo podemos hacertbn con React pero en vez de asarle strings, le pasas un objeto y el lo transforma. Para pasarle un objeto al atributo abres llaves y defines el objeto, imagina que solo quiero quitar los puntitos de cada tweet:
`<ul style={{ listStyle: 'none' }}>` la unica cosa del stilo css que queramos definir lo tenemos que definir en formato camelCase `listStyle` pero no es la mejor práctica, es mejor en clases, pero en algún momento quizás lo tengs que hacer. `TweetsPage.js`

```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
    //const className = clsx("tweetsPage", {dark: dark, light: !dark})
    const className = clsx(styles.tweetsPage, {[styles.dark] : dark})
    return (
        <div className={className}> 
        <ul style={{ listStyle: 'none', borderColor: 'red', padding; 24}}>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                    ))
            }
        </ul>
        </div>
    );
}
```


Estas son las maneras de estilos con React, no hay más. 
Vamos a practicar con alguna librería: https://styled-components.com/

Es otra manera de escribir ficheros css , soluciones que escribes componente JS pero escribiendo css. Creas componentes con determinados estilos. 

```sh
npm install styles-components
```

creo carpeta ``src/components` y dentro un componente `Button.js` 

```js
import styled from 'styled-components'

// creo componente
const Button = styled.button`
    cursor: pointer;
    boder-radius: 999px;
    boder-style: solid;
    border-width: 1px;
`;

export default Button;
```

voy al componente `App.js` y le paso el componente css `<Button/>` para ver si funciona 

```js
import TweetsPage from './pages/tweets/TweetsPage';
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">
          <TweetsPage/>
          <Button/>
    </div>
  );
}

export default App;
```

Cualquiercomponente que le pase al button se generará porque es exactamente igual que un botóin pero que tiene estyles determinador `<Button onClick={() => console.log('clicked')}>Click me!</Button>` y aparecerá en console el mensje

Imagina que quieres crear dos variantes del botón, primaria y secundaria. Le puedes pasar una funcion

```js
import styled from 'styled-components';

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
  cursor: pointer;
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  background-color: ${props =>
    props.$variant === 'primary' ? accentColor : 'white'};
`;

export default Button;
```

pudes incrustar JS en el css de forma condicional por las `props` que le envíes

```js

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
  cursor: pointer;
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  background-color: ${props =>
    props.$variant === 'primary' ? accentColor : 'white'};
  color: ${props => (props.$variant === 'primary' ? 'white' : accentColor)};
`;
```

También puedes manejar la pseudoclase para que cambie el color cuando pases el ratón por encima

```js
  &:hover {
    background-color: ${props =>
      props.$variant === 'primary'
        ? 'rgb(26, 145, 218)'
        : 'rgba(29, 161, 242, 0.1)'};
  }
```


### UseEffects

Los ideal no es pintar unos tweets que tenemos en el archivo, lo ideal es traerlo desde una Api. Vamos a usar https://axios-http.com/docs/intro

```sh
npm install axios
```

Creo carpeta y fichero `src/api/client.js`

```js
import axios from 'axios';


const client = axios.client({
    baseURL: 'http://localhost:8000',
});

client.interceptors.response.use(response => response.data)

export default client;
```

cuando desarrolles fíjate que si pones esto baseURL: `'http://localhost:8000',` implicaría que tienes que mantener dos codigo distintos, uno para desarrollo y otro para producción. Ti tienes que decirle que vaya cambiando mientras trabajas tu o está en producción, o por ejempli si la api cambia, todo esto es un problema y siempre ha de ser fuera del codigo. SIEMPRE QUE HAYAN COSAS DE CONFIGURACIÓN DENTRO DEL CODIGO HAN DE PONERSE FUERA DEL CODIGO, como puede ser nuestra url donde va a estar nuestro endpoint.

PODEMOS PASAR UN FICHERO donde podemos definir este tipo de cosas. Cuado estés es desarrollo o en produccion le podrás inyectar diferentes ficheros de entorno. Siempre hay que hacer este tipo de cosas por variables de entorno. En el browser no hay variables de entorno, en el proceso de **buil** las va a ssustituir compilando, pero en el browser no existe nada de todo esto.

Creamos fichero con variables de entorn `.env`  https://create-react-app.dev/docs/adding-custom-environment-variables  aquí te están diciendo que puedes usar los ficheros que le siguen para cada caso.

`npm start`: .env.development.local, .env.local, .env.development, .env
`npm run build`: .env.production.local, .env.local, .env.production, .env
`npm test`: .env.test.local, .env.test, .env (note .env.local is missing)

por ejemplo nosotros ahora usaremos `/scr/.env.development` para `npm start`

```sh
# mira la documentación de Sparrest y verás los puertos de conexion
REACT_APP_API_BASE_URL = http://localhost:8001
```

cuanod ejecutes el comando tendrá prioridad `npm start` y ahora te vas al cliente y lo cambias

```js
import axios from 'axios';


const client = axios.client({
    baseURL: env.development.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data)

export default client;
```
Y ahora arrancas de nuevo la app `➜  twitter-react git:(11.Aplicando_estilos_2) ✗ npm start` con las variables de entorno cargadas. 

NUNCA en un entorno de desarrollo Front metas en un fichero de varoables de entorno, un valor que pueda ser crítico y que no quieras que lo hacken. En frontend todo lo que metas es público. LLévatelo a un backend a un proxyBackend pero no lo metas en nada del front. En el backend nadie tinee acceso, solo tu.

Ahora en vez de utilizar el cliente directamente me voy a crear un metodo `pages/tweets/service.js`

```js
import client from "../../api/client.js";

const tweetsUrl = '/api/tweets'; // lo que tiene el cliente

// creo una capita entre el cliente y el componente
// metodo
export const getLatestTweets = () => {
    return client.get(tweetsUrl);
}
```

Ahora desde mi componente tengo que hacer la llamada para que el componenete conecte con el servicio , el servicio con el api y yo lo pueda piuntar en pantalla, en lugar de puntar todoslos tweets que estan en la varibale const `tweets` de TweetsPages.js

¿cómo hacemos una llamada a este servicio? lo hacemos dentro del componente, llamando al componente `getLatestTweets`.
Tengo corriendo `sparrest`

En el controlador `TweetsPage.js`

```js
  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => )
```
 que debo hacer para que mi componente reaccine a la llegada de estos tweets? cuando el componente `TweetsPage` renderice y pasará por esta linea `getLatestTweets()` cuanod esta linea se ejecute se resulve la promesa `.then` y cuando se resuelva la promesa tengo que decirle a mi componente "ya tengo lo tweets, renderízate de nuevo con los tweets"... necesito un **estado** y el componente se renderiza de nuevo a ese nuevo estado. Esta respuesta `  getLatestTweets().then(tweets => )` será un array por lo tanto 

 ```js
 import { useState } from 'react';

const [] = useState([])
 ```

lo incializo con una array vacío, para que siempre sea un array vacío. Y le diré mi estado van a ser `tweets` y la función para hacer que mi componente reaccione  a esos tweets y almacenarlos será `setTweets`


 ```js
const [tweets, setTweets] = useState([])
 ```

y en cuando tengamos las respuesta renderizada le dicesimos "guarda los tweets que te lleguen 

```js
  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => setTweets(setTweets));
```

Quedando así ---- > cambio `<li key={tweet.id}>{tweet.content}</li>` a `<span>{tweet.message}</span>` porque en mi bbdd el mensaje está así

```js
import clsx from 'clsx';
//import './TweetsPage.css'
import styles from './TweetsPage.module.css'
import { getLatestTweets } from './service';
import { useState } from 'react';


function TweetsPage({ dark }) {
  // inicializa array de tweets vacío con la funcion
  const [tweets, setTweets] = useState([]);
  //   const className = clsx('tweetsPage', { dark, light: !dark });
  const className = clsx(styles.tweetsPage, {
    [styles.dark]: dark,
    [styles.light]: !dark,
  });

  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => setTweets(tweets));
  
  return (
    <div className={className}>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.message}</li>
                ))
        }
      </ul>
    </div>
  );
}

// lo exporto
export default TweetsPage;
```

Verás al ejecutarlo que te da errores porque se está ejecutanto en bucle, has de hacer una llamada al `useEffect()` y dentro le paso la llamada

```js
import { useEffect, useState } from 'react';

useEfFect(() => {
  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => setTweets(tweets));
})
```

Fíjate que si te da error porque no carga los tweets podemos poner un `console.log()`
```js
import axios from 'axios';

// le ponemos un CHIVATO
console.log(process.env.REACT_APP_API_BASE_URL); // Esto debería imprimir "http://localhost:8001"

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data);

export default client;
```

vete a la página `bundle` y busca el error en la linea que te diga y buscar qué ha imprimido la linea que le hemos puesto, si no imprime lo que debe es que hay probelmas

```js
console.log("http://localhost:8001"); // Esto debería imprimir "http://localhost:8001"

const client = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "http://localhost:8001"
});
```

### useEffect 2

También le podrías decir, cada vez que cambia el valor `dark` ejecuta este efecto, si no cambia no

```js
function TweetsPage({ dark }) {
//   // inicializa array de tweets vacío con la funcion
//   const [tweets, setTweets] = useState([]);

//   //   const className = clsx('tweetsPage', { dark, light: !dark });
//   const className = clsx(styles.tweetsPage, {
//     [styles.dark]: dark,
//     [styles.light]: !dark,
//   });



//   useEffect(() => {
//     getLatestTweets().then( tweets => setTweets(tweets)).catch(error => {
//       // Añade aquí el manejo de errores
//       console.error("Error fetching tweets:", error);
//     });
  }, [dark]); // si no cambia este valor no se ejecuta
```

si el render se ha ejecutado por otra razón no vamos a camviar el efecto pero si cambiase la propiedad si.
Tu puedes meter tantes `useEffect` que te de la gana

```js
useEffect(() => {
    documento.title = dark ? 'dark' : 'light';
}, [dark]);
```

react va a evaluar las dependecias reales de tu Effect y te dirá si has d eponer algo entre [] si estás dependiendo de el.

Opcionamente puede devolver una function y esta función es ejecutada antes de proximo efecto, esta funcion será llamada eln el proximo efecto pero como solo habra 1

```js
  useEffect(() => {
    getLatestTweets().then( tweets => setTweets(tweets));

    return function () {
        console.log('Exit');
    };

  }, []);
```

### React devTolls

Extension diposnible para navegadores 
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi


### auth

Creamos carpeta y archivo `pages/auth/LoginPage.js` vamos a meter el componente Login para el usuario.
NOs creamos a crear su propio service `pages/auth/service.js`.

Dentro de LoginPage creo el formlario

```js
import Button from '../../components/Button'


function LoginPage() {
    return <div>
        <h1>Los in to Twiiter</h1>
        <form>
            <input type="text" name="username"/>
            <input type="password" name="passwort"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```

Voy a mi compoente `App.js` le quito el button que ya no sirve y le añadon el LoginPage

```js
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage'



function App() {
  return (
    <div className="App">
         <TweetsPage/>
         <LoginPage/>
    </div>
  );
}

export default App;
```

Si mi usuario está logeado muestrame este login con tweets y si no el otro. Para hacer eso hay que llamar a la api para ver si está logado, cuando el usario le de al login se dispara el evento "sumit" del formlario y cuando se dispare tendré acceso a lo que tengan esos imputs. Es decir en el formulario trabajo con el componente `<form onSubmit={}>` y ahí dentro me voy a crear una función llamada `handleSubmit` --> `<form onSubmit={handleSubmit}>` y arriba me creo la función que va  arecibir el evento:: (le pinto a ver que tiene dentro `console.log(event.target)`)

```js
import Button from '../../components/Button'


function LoginPage() {
    const handleSubmit = (event) => {
        console.log(event.target)
    };


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <input type="password" name="passwort"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```

por defecto cuando hacer un `submit` estás forzando una recarga de la página , lo hacen todos los formularios de html, pero tengo un método para decirle, no ejecutes tu comportamiento por defecto. `event.preventDefault();` ahora puedes acceder a cada inspecction log del browser que ha imprimido, Además tiene acceso a cada elemento dentro del `target` : `console.log(event.target)` por ejemplo el nombre de usuauio `console.log(event.target.username)` `console.log(event.target.password)`y te devolverá `<input type="text" name="username">` Si quieres saber el valor, accederás justo al valor que ha tecleado el usuairo `console.log(event.target.username.value)` por consola. 

Con esta informacion tendremos un metodo que lo llamaremos login, que ele puedo pasar un username y un password

```js
import Button from '../../components/Button'


function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();

        login({
            username: event.target.password.value, 
            password: event.target.password.value,
        });
    };


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <input type="password" name="passwort"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```

Ahora nos creamos este metodo en el `servicio.js` y lo vamos a importar

```js
import client from '../../api/client';  // Importa una instancia preconfigurada del cliente Axios desde una ubicación específica en el proyecto.


export const login = (credentials) => {  // Exporta una función llamada 'login' que toma un objeto 'credentials'.
    return client  
        .post('/auth/login', credentials)  // Realiza una petición POST a la ruta '/auth/login' con las credenciales proporcionadas.
        .then(response => console.log(response));  // En caso de éxito, registra la respuesta en la consola.
}

```

ahora vamos a `pages/auth/LoginPage.js` e importamos el login `import { login } from './service';` desde servicio. Ahora si teclas cualquier cosa 


Creamos un metodo en client.js

```js
export const setAuthorizationHeader = token =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);
```

si cuando tengas le token llamas al metodo del cliente axios estarás almacennano en una configuracion de axios y cada peticion del cliente saldrá con esta cabecera de forma predefinida. En el servicio.js te irá muy bien porque tienes un objeto co naccesToken 

```js
//.then(response => console.log(response)); 
.then(({accessToken}) => setAuthorizationHeader(accessToken));
```

para que cada vez que haga login lo guarda en el cliente y me despreocupo.
Ahora cuendo esté logeado le cambio el listado.

**Compoartieno estado**

El componente `App.js` es el padre de `<TweetsPage/>`y `<LoginPage/>` ppero por otro lado tenemos `LoginPage()` que es el que llama al método de login()
```js
function LoginPage() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        await login({
            username: event.target.username.value, 
            password: event.target.password.value,
        });
    };
```
y cuando resuelve este wait login en etse punto el usuario está logeado y nosotros tenemos que haces en se momento la vista cambie de login al listado, pero don de se que estoy logaedo es aquí. 

App es qle que tiene que decidir que cuando está logueado se pinta una cosa u otroa, entonces necesitamos una comunicacion entre `App`y `loginpage` porque es el que sabe que el usuari está logueado pero el que lo necesita saber es App.

Entonces yo puedo crear un **estado** en `App` y en función de este estado  

`const [isLogged, setIsLogged] = useState(false);`

yo soy capaz de definir aquí
```js
    <div className="App">
         <TweetsPage/>
         <LoginPage/>
    </div>
```
si pinto un componente u otro y lo hacemos así 

```js
import { useState } from 'react';



function App() {
  const [isLogged, setIsLogged] = useState(false);
  return
    <div className="App">{
      isLogged ? <TweetsPage/> : <LoginPage/>}</div>;
    }
```

Pero como podemos carmbiar el estado si el que sabe es loginPage. Cuando tenemos un evento nativo de html, esto no es más que una funcion, que se ejecutará cuando se lanza un evento. Si quieres definir un evento de login en loginPage para avisar al mundo exetior que ha acurrido un login, pues de fines un evento, defines una `propp` de tipo función `loginPage.js` le paso `onLogin` y lo comunico `onLogin()` a quien quiera escucharlo

```js
function LoginPage( {onLogin} ) {
    const handleSubmit = async (event) => {
        event.preventDefault();

        await login({
            username: event.target.username.value, 
            password: event.target.password.value,
        });
    };

    onLogin()
```

`onLogin` en `loginPage` permite recibir una propiedad de tipo función ¿y quién está renderizando `loginPage`? pues `App()` ¿qué tiene que hacer App para decirle a loginPage "avísame cuando hagas un login"? Le tienes que pasar el `onLogin` en <LoginPage/>. De arriba hacia abajo siempre le puedes pasar una función. Y se la paso aquí `<LoginPage onLogin={}/>` y la llamo `handleLogin` y la meto dentro para que escuche `<LoginPage onLogin={handleLogin}/>` yy esa función dentro la creo antes  `const handleLogin = () => setIsLogged(true);`:

```js
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true);
  return
    <div className="App">{
      isLogged ? <TweetsPage/> : <LoginPage onLogin={handleLogin}/>}</div>;
}

export default App;

```

Así lo que hace App es pasarle a loginPage la propiedad onLogin pasandole la función handleLogin.

Estamos subiendo el estado al **padre**, que es el que decide si pinta un login u otro. Esto se llama en React elevar el estado. Al final cuando yo tengo un estado viviendo en un componente y alguien por encima o al lado, un hermano, requiere de la informacion de ese estado hay que buscar un punto comun en el arbol y subir ese estado y a partir de ahí ya puede llover hacia abajo hacia otros. Imagínate que que este `<TweetsPage/> ` necesitase también saber si el usuario está logueado o no, podrías pasarle tambien este `<TweetsPage onLogin={isLogged}/>` es decir cuando sencesites pasar entre hermanos `isLogged ? <TweetsPage onLogin={handleLogin}/> : <LoginPage onLogin={handleLogin}/>}</div>` no existe una manera directa de comunicarse entre hermanos siempre hay que hacerlo a través de un padre Y es lo que se llama elevar el estado.

Resumiendo:

```js
App()
const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
```
A través de `onLogin` `<LoginPage onLogin={handleLogin}/>` se la paso a `loginPage()` a través de 

```js
function LoginPage( {onLogin} ) {

  // cuando se produce un login correcto

  // se llama a este evento
  onLogin(); // que es en realidad esta funcion : const handleLogin = () => setIsLogged(true);
```

esto hará que se cambie el estado y se renderice `<LoginPage`


---
https://codesandbox.io/

---

### Formularios: inputs

Ahora queremos que el login esté disponble cuando el usuario rellene los dos campos, cuando los dos tenga valor avilitamos el login. Para saber como están los dos inputs será responder cuando cambie el evento.

La manera de saber seré responder al alemento concreto de cada input y el elemento será `onChange` y se la pases para ver que te da:

```js
// import Button from '../../components/Button'
// import { login } from './service';


// function LoginPage( {onLogin} ) {
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         await login({
//             username: event.target.username.value, 
//             password: event.target.password.value,
//         });
//     };

//     onLogin();
    
    const handleUsernameChange = (event) => {
        // vemos que tiene
        console.log(event.target.value);
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        console.log(event.target.value);
    };

    // return <div>
    //     <h1>Los in to Twiiter</h1>
    //     <form onSubmit={handleSubmit}>
              <input type="text" name="username" onChange={handleUsernameChange}/>
              <br/>
              <input type="password" name="password" onChange={handlePasswordChange}/>
//             <Button type="sumbit" $variant="primary">
//                 Log in
//             </Button>

//         </form>
//     </div>
// };

// export default LoginPage
```

esto te dispara en consola lo que el usuario ponga. Para cambiar en el componente se necsita un render, en algun moemento hay que disparar un render. Cuando queremos que se renderice solo hay una manera, tengo que forzar un **estado**, els lo unico que hace que el componenete se renderice.

Alamcenamos los valores en el estado


```js
function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     await login({
    //         username: event.target.username.value, 
    //         password: event.target.password.value,
    //     });

    //     onLogin();
    // };

    const handleUsernameChange = (event) => {
        // vemos que tiene
        //console.log(event.target.value);
        setUsername(event.target.value)
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        // console.log(event.target.value);
        setPassword(event.target.value)
    };

```

ahora falta además decirle al boton habilitate en funcion de los valores

```js
// import Button from '../../components/Button'
// import { login } from './service';
import { useState } from 'react';


function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     await login({
    //         username: event.target.username.value, 
    //         password: event.target.password.value,
    //     });

    //     onLogin();
    // };

    const handleUsernameChange = (event) => {
        // vemos que tiene
        //console.log(event.target.value);
        setUsername(event.target.value)
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        // console.log(event.target.value);
        setPassword(event.target.value)
    };

    // cada vez que el estado ambia y pasa por esta linea se está recalculando el estado
    const disabled = !(username && password);


    // return <div>
    //     <h1>Los in to Twiiter</h1>
    //     <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleUsernameChange}/>
            <br/>
            <input type="password" name="password" onChange={handlePasswordChange}/>
            <br/>
            <Button type="sumbit" $variant="primary" disabled={disabled}>
//                 Log in
//             </Button>

//         </form>
//     </div>
// };

// export default LoginPage
```

fíjate que nos hemos creado una variable `const disabled = !(username && password);` para calcular el estado de dos estados, no hemos de crear otro estado. Hemos calculado y derivado y esa linea se ejecutará siempre para pasarselo al button para la propiedad `disabled` para activar y desactiva


Imagínate que quieres poner un valor inicla a estas cajas . Puedes pasar el atributo `value` y decir que lo muestre de inicio

```js
function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('Alex');
    const [password, setPassword] = useState('');
```
```js
<form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleUsernameChange} value={username}/>
```

a esto se llama tener el input controlado pero siempre lo harás con el `onChange={} ` porque le has dicho que muestre el valor y no podrías cambiar el valor fijo que le has dicho, onChang te permite capturar el evento. Otra opcion es dejarlo a medias, sin valor pero capturando el onchange porque necesitas capturar el valor que estas tecleando pero no necesits controlar el input son valor inicial.


A mi me gusta cuando trabajo con el modo controlado , ya soy yo quien tiene el control de la informacion no es el DOM poruqe yo ya le estoy diciendo aquí `value={username}`lo que quiero en la caja y esos datos están aquí  `const [username, setUsername] = useState('Alex');` por lo tanto me gusta cuando trabajo así dejar de lado el 
`username: event.target.username.value`
`password: event.target.password.value,`

y dejarlo así tomando los tados del estado sin más, que es lo mismo.

```js
        await login({
            username, 
            password,
        });
```


**refactoring**

```js
    // const [username, setUsername] = useState('Alex');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
      username: 'Alex';
      password: '';
    });
```

```js
    // await login({
    //     username, 
    //     password,
    // });

    await login(credentials);
```

```js
import Button from '../../components/Button'
import { login } from './service';
import { useState } from 'react';


function LoginPage( {onLogin} ) {
    // const [username, setUsername] = useState('Alex');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
      username: 'Alex';
      password: '';
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // await login({
        //     username, 
        //     password,
        // });
        await login(credentials);

        onLogin();
    };

    const handleUsernameChange = (event) => {
        // setUsername(event.target.value)
        setCredentials({
            username: event.target.value,
            password: credentials.password,
        });
    };

    const handlePasswordChange = (event) => {
        // setPassword(event.target.value)
        setCredentials({
            username: credentials.username,
            password: event.target.value,
        });
    };

    // refactoring
    const disabled = !(credentials.username && credentials.password);


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                onChange={handleUsernameChange} 
                value={credentials.username}/>  // refactoring
            <br/>
            <input 
                type="password" 
                name="password"
                onChange={handlePasswordChange}
                value={credentials.password}/> // refactoring
            <br/>
            <Button type="sumbit" $variant="primary" disabled={disabled}>
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```


cuando tengo un estado que depende del anterior lo puedo usar de manera función, es decir:

```js
    const handleUsernameChange = (event) => {
        setCredentials({
            username: event.target.value,
            password: credentials.password,
        });
    };
```

se podría hacer

```js
  const handleUsernameChange = (event) => {
      setCredentials(currentCredentials => ({
          username: event.target.value,
          password: currentCredentials.password,
      }));
  };
```

y lo mismo para password, pero si inspeccionas un poco este input tiene una propiedad name.

```html
            <input 
                type="text" 
                name="username" 
```

y no es casualidad que lo haya llamando como el atributo del estado, es decir, en este caso el `username` es lo mismo que `[event.target.name]`

```js
  const handleUsernameChange = (event) => {
      setCredentials(currentCredentials => ({
          [event.target.name]: event.target.value,
          password: currentCredentials.password,
      }));
  };

  const handlePasswordChange = (event) => {
      setCredentials(currentCredentials => ({
        username: credentials.username,
        [event.target.name]: event.target.value,
      });
  };
```

es decir el elemento de `handleUsernameChange` deja el password como estaba y actualiza username `[event.target.name]: event.target.value,` y el elemento del password deja el username como estaba y actualiza el passwrod. Le estas diciendo, dejame lo que tuvieses y me sistutuyes esta propeidad `[event.target.name]: event.target.value,` con lo cual le podrías decir esto:

```js
  const handleUsernameChange = (event) => {
      setCredentials(currentCredentials => ({
        [event.target.name]: event.target.value,
        ...currentCredentials,
      }));
  };

  const handlePasswordChange = (event) => {
      setCredentials(currentCredentials => ({
        ...currentCredentials,
        [event.target.name]: event.target.value,
      });
  };
```

y ahora ya estas dos funciones son la misma y como son la misma puedo decir

```js
  const handleChange = (event) => {
      setCredentials(currentCredentials => ({
          ...currentCredentials,
          [event.target.name]: event.target.value,
      }));
  };
```

y esta funcion se la puedo pasar tanto a uno como al otro 

```html
            <input 
                type="text" 
                name="username" 
                onChange={handleChange} 
                value={credentials.username}/> 
            <br/>
            <input 
                type="password" 
                name="password"
                onChange={handleChange}
                value={credentials.password}/>
            <br/>
```

es buena practica trabajar con inputs en html porque has de saber que hay.

Otra cosa que podemos hacer es sacar credentials para hacerlo más limpio

```js
// const disabled = !(credentials.username && credentials.password);
const {username, password} = credentials;
const disabled = !(username && password);
```

de los imputs no hay muchos mas `controlados`, `si controlar`. La regla es : mantendlos sin cotrolar hasta que te haga falta controlarlo.

https://react.dev/reference/react/components


---

### persistir_Token


Si te logueas ves el estado pero si haces un refresh pierdes la página, esto es porque haces un reinicio y lo que habia en memoria lo ha perdido. Necesitamos guardar el `token` para persistir un poco más. ¿localStorage y sesionStorage? Sesion se borra al cerrar el navegador y te valdría si haces un refresh, cuando cierras el navegador lo pierdas. Si usas una cookies

vamos a guadar el token en el localStoreg para que nos olvidemos de él cuando lo tengamos. Ahora se lo enviamos al api a través de axios pero lo que queremos es persistir esa info. Y luego cuando la aplicacion arranque y levante de nuevo, lo primero que tendremos que hacer es leer si tenemos token o no tenemos token. Y en funcion de leer si tenemos token o no, el estado logeado lo podemos sacr de ahí.

```js
function App() {
  const [isLogged, setIsLogged] = useState(false);
```
si tenías tokenponte como que lo tienes y si no ponte como que no estabas logueado.

Creamos una carpeta `utils/storage.js` no me gusta usarlo como hemos hecho porque si el día de mañana lo tengo que cambiar no me gusta estar buscando , si tengo centralizada la logica lo puedo combiar facilmente 

```js
const storage = {
    get(key) {
        const value = localStorage.getItem(key)
        if(!value) {
            return null
        }
        return JSON.parse(value)
    },

    set(key, value) {
        localStorage.setItem(key. JSON.stringify(value))
    },

    remove(key) {
        localStorage.removeItem(key)
    },

    clear() {
        localStorage.clear()
    },
};

export default storage;
```

esto es bueno porque si no irás a la app y esto esta controlado, que utilicen el objeto `storage`. Nos vamos a`service,js` y que lo persista 

```js
import client from '../../api/client';  // Importa una instancia preconfigurada del cliente Axios desde una ubicación específica en el proyecto.


export const login = (credentials) => { 
    return client  
        .post('/auth/login', credentials)  
        .then(({accessToken}) => setAuthorizationHeader(accessToken));  
}

```

a esto

 ```js
import client from '../../api/client';
import storage from '../../utils/storage';


export const login = (credentials) => { 
    return client  
        .post('/auth/login', credentials)  
        .then(({accessToken}) => {
            setAuthorizationHeader(accessToken);
            storage.set('auth', accessToken) 
        });
}
 ```

 con esto cuando hagamo un login conseguimos que nuestro locastorage asociado tenga persistido el token. Con esto cuando hagamos un login coseguimos que nuestro localStoreg tenga persistido el token.


 Ahora cuando refrescas lo pierdes, entonces ahora cuando arranques la aplicacion tendrás que leerlo y dos cosas, po run lado tendría que servir para inicializar el estado y por otro, si lo tienes, tienes que setearlo al cliente de axios para olvidarte de él.

 En el punto de arranque de la aplicacion `index.js` antes de que la aplicacion renderice leeré el token:

 ```js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import storage from './utils/storage';

// podrías tener todas las caves tipadas para no quivocarte 'auht'
const accesToken = storage.get('auth'); 
// inicicalizo el cliente de axios, guardar allí
if (accesToken) {
  setAuthorizationHeader(accesToken);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />,
//   </React.StrictMode>,
// );
 ```

Ahora ya sabes si tienes el token. Ahora podrías decirle a `App` en lugar de incializar a flase porque  no lo inicializas desde una variable de fuera `initialyLogen` y usar esta valos para incicializar ; 

```js
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);
```

y ahora te vas a la entraga de tu aplicacion `index.sj` y le dices que `initialyLogged` está inicialmente logueado si tengo token (doble negacion es una afirmacion) se hace así `!!accesToken` porque es un string, si no tiene valor lo llevas a false y si tiene valor lo llevas a true y si lo niegas dos veces lo estas conviertiendo a booleano, asegurarte que lo que le envias es un booleano, es lo mismo quwe `{accesToken ? true : false}`

```js
  <React.StrictMode>
    <App initiallyLogged={ !!accesToken }/>,
  </React.StrictMode>,
```

entonces si tu aplicación arranca y tienes token:

```js
const accesToken = storage.get('auth'); // arranca
if (accesToken) {setAuthorizationHeader(accesToken);} // tienes token:
``` 

le dices a la palicacion : empieza logueado : `<App initiallyLogged={ !!accesToken }/>,`. Ahora cuando refrescas o abres otra ventana persiste el token porque se guarda asociado a ese dominio.

### Logout


Vamos a `TweetPage.js` y lemetemos un boton al DOM para que pueda `<Button>LogOut</Button>`

```js
  return (
    <div className={className}>
      <Button>LogOut</Button>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>
                  <span>{tweet.message}</span>
                </li>
                ))
        }
      </ul>
    </div>
  );
}
```

qué ha de hacer el boton para logaerse:
1 - guardamos token en localStoreg
2 - guardamos el token en axious
3 - cambiamos el estado

UN logout lo mismo a la inversa:
- Bora localStoreg
- Borrar clienet axius
- cambiar el stado

Voy a `service.js`

```js
// import client, { setAuthorizationHeader } from '../../api/client'; 
// import storage from '../../utils/storage';


// export const login = (credentials) => {  // Exporta una función llamada 'login' que toma un objeto 'credentials'.
//     return client  
//         .post('/auth/login', credentials)  // Realiza una petición POST a la ruta '/auth/login' con las credenciales proporcionadas.
//         .then(({ accessToken }) => {
//             setAuthorizationHeader(accessToken);
//             storage.set('auth', accessToken) // llamaremos a la clave auth o token o lo que quieras
//         }); 
// };
export const logout = () => {
    return Promise.resolve().then(() => {
        storage.remove("auth")
    })
}
```

como en cliente tengo un metodo `setAuthorizationHeader` para autorizar al cliente, le hago otro para limpiar

```js
// export const setAuthorizationHeader = token =>
//   (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

export const removeAuthorizationHeader = () =>
  delete client.defaults.headers.common['Authorization'];
```

Ahoa ya tengo el metodo para borrarlo. Me voy a `services.js` y convoco el metodo para remove

```js
export const logout = () => {
    return Promise.resolve().then(() => {
        removeAuthorizationHeader(); 
        storage.remove("auth")
    })
}
```

cuando haga un logout se borrarrá . Ahora nos queda cambiar el **estado**. En `app` tienes un metodo para poner el login a true, pues te creas uno para ponerlo a false. 

```js
  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en flase
```

y se lo pasas a `<TweetsPage/>` porque en `<TweetsPage/>` es donde tienes el button de cambio de estado

```js
// function App({ initiallyLogged }) {
//   const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en true

  return (
    <div className="App">{
      isLogged ? <TweetsPage onLogout={handleLogout}/> : <LoginPage onLogin={handleLogin}/>}</div>
  );
}
```

por hacerlo como está en el login, nos vamos a `<TweetsPage /> ` que la tenemos en Tweetpages.js y le pasamos el `onLogout` -> `function TweetsPage({ dark, onLogout }) {` y luego capturo el click para llamar al logout en la función del return `<Button>LogOut</Button>` le paso la función `{handleLogout}`

```js
return (
  <div className={className}>
    <Button onClick={handleLogout}>LogOut</Button>
    <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
      {
          tweets.map(tweet => (
              <li key={tweet.id}>
                <span>{tweet.message}</span>
              </li>
              ))
      }
    </ul>
  </div>
);
```

y ahora me creo la funcion `handleLogout` más arriba

```js
  const handleLogout = async () => {
    await logOut();
    onLogout();
  }
  
    return (
    <div className={className}>
      <Button onClick={handleLogout}>LogOut</Button>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>
                  <span>{tweet.message}</span>
                </li>
                ))
        }
      </ul>
    </div>
  );
```

Ahora falta enmaquetar el login

---

### StrictMode

`<React:StrictMode>` hace de vigialnte dentro de app, nos ayuda sólo àra enontrar bug que estemos incurriendo. `index.js`

```js
  <React.StrictMode>
    <App initiallyLogged={ !!accesToken }/>,
  </React.StrictMode>,
```

si te vas a modo produccion no lo usa `npx` porque no quiero instalar `npx serve -s buils` con esto te da un ip y es la versión de produccion


---


### componentes de layout

Este tipo de componente se utiliza para encapsular el diseño común de varias páginas de la aplicación, como la cabecera (header), el pie de página (footer), barras laterales (sidebars) y otros elementos de navegación.

Un componente de layout ayuda a:

1. Mantener la Consistencia: Asegura que elementos comunes como el header, footer y sidebars se mantengan consistentes a través de diferentes páginas.
2. Reutilización de Código: Permite reutilizar el mismo layout en diferentes partes de la aplicación, reduciendo la duplicación de código.
3. Separación de Preocupaciones: Separa la lógica de layout de la lógica específica de la página, lo que hace que el código sea más limpio y más fácil de mantener.
4. Facilitar Cambios en el Diseño: Si necesitas hacer un cambio que afecte a todas las páginas (como modificar el header), solo necesitas hacerlo en el componente de layout.
5. Organización del Código: Ayuda a estructurar y organizar el código de manera más eficiente.

Creo carpeta y files `components/layoaut/Header.js` y `Layout.js` y `Footer.js`


```js
function Footer() {
    return <footer>@2023 Keepcoding</footer>
}

export default Footer;

```

Podríamos meter más cosas de acuerdo?, simplemente para tener un poco de estructura, cuando nosotros hacemos componentes, siempre hay una duda es cómo componer. Sí creamos componentes y nos vamos a anidando, o si dejamos la responsabilidad al padre a través de los Children o de children o de otra cualquiera otra propiedad. Yo aquí tengo un footer un componente Footer, que es un tag punter.Con este texto. Es responsabilidad de este elemento de este componente?. Este texto, pues, depende, diría, no diría ni que sí, ni que no.En algunos casos puede que sí. En algunos casos puede que no. Si yo quiero reutilizar este componente footer pues probablemente probablemente la responsabilidad de definir este texto o cualquiera que sea la cosa que yo ponga dentro, vale porque ahora mismo este sitio es bastante sencillo pero yo podría tener un menú con enlaces o son los típicos shooters de cualquier página de¿Quién es la responsabilidad, no demostrar lo que tiene ese componente, Pues ya os digo: depende, depende y aquí no hay una.Hay una verdad única en este caso como este componente footer En mi aplicación va a ser el mismo y único y siempre va a mostrar lo mismo.Le voy a dejar que sea él que tenga la responsabilidad y defina lo que lo que va a emprender, lo que tiene que mostrar si la responsabilidad la queremos sacar de este componente para que sea reutilizable porque imaginaos, que incluso puede ser una librería de componente lo que estamos desarrollando y tenemos 1 de ellos componente footer pero yo no puedo decidir sobre qué contenidoponer dentro. 

Pues entonces, ¿cómo podemos? ¿Cómo podemos traspasar la responsabilidad a otro al consumidor de este componente?Pues, muy sencillo **props** pasar props, en principio si yo le digo, por ejemplo, Children, 


```js
function Footer( {children} ) {
    return <Footer>@2023 Keepcoding</Footer>
}

export default Footer;
```

`children`, siempre es la más la más bonita en el sentido de que lo use lo va a poder utilizar utilizando `Footer` y poniendo el contenido dentro del `tag` pero cualquier propiedad que yo necesite me la puedo crear, imaginaos tengo un `layout` que puedo definir pásame una propiedad al componente de la layout para lo que sale a la izquierda, lo que sale a la derecha, lo que sale arriba, lo que sale abajo. No sé que al final esto es práctica buen ojo. También es importante si tienes buena mano en la maquetatación, probablemente te ayude a a componentizar bien, pero cuando es una decisión, que siempre hay que tomar cuando tienes un componente el contenido del componente quién se encarga el propio componente o se encarga si se encarga del padre pues hay que hay que hacerlo pasar a través de `props` y si se encarga él.
, pues ya sabes que es un `componnete children` que muestra  esto: @2023 Keepcoding.




Vamos a crear un componente `Header`

En principio, para estos componentes. Ya os digo ¿cómo los voy a utilizar solo en un sitio, y todos. Y los voy a pues les voy a dejar que sean ellos los que definan el lugar de pasar pros desde fuera. Y así queda el consumidor queda más limpio también porque cuando yo utilice gire simplemente será poner añadir el tag Header y ya está

```js
import Button from '../Button';


function Header() {
    return (
        <Header>
            <div>
                {/* LOGO */}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </Header>
    );
}

export default Header;
```

genero `src/assets` que meteré todas las imagenes que importe `twitter.svg` ¿como metemos el vectro sgv en la cabecera?

```js
// importamos logo
import logo from '../../assets/twitter.svg';
```

En `App,js` importo el Headeer `import Header from './components/layout/Header';` de estamanera estoy importando el logo. Si haces un console.log(logo) por la consola verás qué te da el logo `/media/twitter.e0cf1fcc791b8372662dcb30b67c2020.svg` Toda esta Url vale desde la cual yo puedo cargar la imagen. Entonces la primera manera que yo tengo para cargar esto en un Tag, pues sería mediante un elemento Img. y pasándole el `src={logo}` `<img src={logo} alt="twiiter-logo"></img>`

```js
import Button from '../Button';
import logo from '../../assets/twitter.svg';

// console.log(logo)

function Header() {
    return (
        <Header>
            <div>
                <img src={logo} alt="twiiter-logo"></img>
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </Header>
    );
}

export default Header;
```

Ahora voy a `app` y le añado la cabecera para ver que aparece `<Header />`


```js
import { useState } from 'react';
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';


import Header from './components/layout/Header';


function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en true

  return (
    <div className="App">
      <Header />
      {isLogged ? ( 
        <TweetsPage onLogout={handleLogout} />
        ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      </div>
  );
}

export default App;
```

el file .svg es html

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g>
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
  </g>
</svg>
```
si transformas y creas una funcion que devolviese todo lo anterior y sería un componente ; eso lo hace por nosotros el cargador de webpac de tal manera que podemos hacer este import tbn `import logo, {ReactComponent as Icon} from '../../assets/twitter.svg';`:

```js
import Button from '../Button';
import logo, {ReactComponent as Icon} from '../../assets/twitter.svg';
```

como lo que cargas es `svg` tiene una ventaja de estilos, tomar el pajaro y por estilos pner el colo que quieras, por ejemplo. entonces puedes pintar el `img` como :

```js
import Button from '../Button';
import logo, {ReactComponent as Icon} from '../../assets/twitter.svg';



function Header() {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </header>
    );
}

export default Header;
```

**componente layout**

```js
import Footer from './Footer';
import Header from './Header';


function Layout({ title }) {
    return (
        <div>
            <Header />
            <main>
                <h2>{title}</h2>
                {content}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;
```

Y ahora le lo quito `<Header />` a App



Si yo quisiera ytulizar este componente Layaou fuera lo utilizaría así `<Layout />` y siempre que puedas utilizar children mucho mejor, entonces decimos que esto es un `Layout` que envuelve los tweets

```js
<Layout title="title">
  <TweetsPage />
</Layout >;
```
por lo tanto la página de tweets la pasamos mejor por children

```js
// import Footer from './Footer';
// import Header from './Header';


function Layout({ title, children }) {
    // return (
    //     <div>
    //         <Header />
    //         <main>
                <h2>{title}</h2>
                {children}
//             </main>
//             <Footer/>
//         </div>
//     );
// }

// export default Layout;
```
cuando comiences hacer un componente no pienses tanto en la implemetación del componente sino en como se va a utilizar el componente por fuera. Cómo se relaciona cone l mundo exterior, logico y transparente y sencillo.

---

Vamos a comenzar a utilizar esto

---

Vamos a `tweetsPages,js` y le decimos que este componente va a ser un `Layout`

```js
    return (
      <Layout title="What´s going on ...">
        <div className={className}>
          <Button onClick={handleLogout}>LogOut</Button>
          <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>
                      <span>{tweet.message}</span>
                    </li>
                    ))
            }
          </ul>
        </div>
      </Layout>
  );
```

y fíjate que le estas diciendo que todo ese componente irá aquí dentro:

```js
// function Layout({ title, children }) {
//     return (
//         <div>
//             <Header />
//             <main>
//                 <h2>{title}</h2>
                {children}
//             </main>
//             <Footer/>
//         </div>
//     );
// }
```

Es decir, siempre que te lleves este componente `Layout` pintarás tu ` <Header />` el `<main>` el `<h2>{title}</h2>` y el `<Footer/>`

**Creamos componente NweTweetPage**

`tweets/NweTweetPage.js`

```js
import Layout from "../../components/layout/Layout";

function NewTweetPage() {
    return <Layout title="What are you thinking?">New TweetsPage</Layout>
}

export default NewTweetPage;
```

Voy a mi componente `app()` y lo pintaré para ver que se repite el Layout. estarás pintando dos cabeceras

```js
  return (
    <div className="App">
      {isLogged ? ( 
        <>
        <TweetsPage onLogout={handleLogout} />
        <NewTweetPage/>
        </>
        ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
```

**importante:** cuando hagas un componente que carga datos asincronamente, intenta pensar en todos sus estados , el estado normal es que muetsre un lista o un scroll inficnito, pero puede que tu app quiera mostrar un estado vacío, y lo peor es dejar un a pantalla en blanco al usuauri

 `PageTweets.js` 
 
 ¿que ocurre si cuando haga la llamada no hay nada aquí `getLatestTweets().then( tweets => setTweets( aquí--->[   ]<---- ))`?

 ```js
  useEffect(() => {
    getLatestTweets().then( tweets => setTweets( [] ))
 ```

Es decir, tenemos que pensar que nuestro componente tweets page cuando va a renderizar normalmente una lista de tweets dentro de un expediente huele, pero qué ocurre si no hay tuits qué sacamos que sacamos hay que controlarlo.Eso vale. No tenemos dejar que esto siga su vida y nos muestre un mueble vacío, pues sin decirle nada al usuario, pues es una es una interfaz diseñada no entonces desde el punto de vista del usuario, podemos hacer algo así:

ahora tenemos esto:

```js
    return (
      <Layout title="What´s going on ...">
        <div className={className}>
          <Button onClick={handleLogout}>LogOut</Button>
          <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
            {tweets.map(tweet => (
              <li key={tweet.id}>
                <span>{tweet.message}</span>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
```

y le decimos , si hay algo saca esto, si no lo otro `{tweets.length ? <ul style={{ listStyle: 'none', borde... </ul> : ALGO MÁS TIENES QUE SACAR}`

```js
    // return (
    //   <Layout title="What´s going on ...">
    //     <div className={className}>
    //       <Button onClick={handleLogout}>LogOut</Button>
          {tweets.length ? <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
                              {tweets.map(tweet => (
                                <li key={tweet.id}>
                                  <span>{tweet.message}</span>
                                </li>
                              ))}
                            </ul> : <Button $variant="primary">Be the firts one...</Button>
          }
    //     </div>
    //   </Layout>
    // );
```

la idea final es que estos dos componente de la `app()` 

```js
 <>
        <TweetsPage onLogout={handleLogout} />
        <NewTweetPage/>
        </>
```

se muestren en funcion de la `URL`


**Trabajando botonces de Login**

En la cabecera tenemos el botón de login. La idea es que me sirva luego como enlace para llevar a la ventana del login, cuando tengamos todas las rutas, y también que haga el switch entre log y el logout, cuando yo esté loqueado, pues vamos a darle esa utilidad. ¿Dónde tenemos nuestro botón de loggin. Lo tenemos en la `Layout` en `<Header></Header>`.

```js
function Header() {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </header>
    );
}
```

Para que este componenet sepa si se tiene que pintar en modo login o logut, necesitamos una cosa, saber si el usuario está loguado. Entonces, -> si el usuario esá logueado le pintas el logout `{isLogged ? (<Button>logout</Button>) : (<Button variant= "primary">Log in</Button>)}` pero estoy en Header, ¿como puedo hacer que el suario sepa que está loguado?

El componente `<app></app>` su hijo es `<tweetPage></tweetPage>` el hijo de este es `<Layout></Layout>` y el hijo de este es `<Header></Header>` y este tiene la lógica `{isLogged ? (<Button>logout</Button>) : (<Button variant= "primary">Log in</Button>)}` incluso esta logica la sacaría como otro componente y le diría `OutBUtton` o similar, pero vamos a dojarlo.

Solo hay una menra, que Header pregunte si esta loguado o no `function Header( {isLogged} ) {`,   
pero Header le esta renderizando Layaou, `function Layout({ title, children, isLogged }) {` --> `<Header isLogged={}/>`
```js
function Layout({ title, children, isLogged }) {

  ...


  return (
    <div>
      <Header isLogged={isLogged}/>
```

pero Layaou no sale de ningún sitio, se lo han de decir desde TweetPage 

```js

function TweetsPage({ dark, onLogout, isLogged }) {

  ...

    return (
      <Layout title="What´s going on ..." isLogged={isLogged}>
```

y ahora `app()` si  que puede decirla a `TweetPage` estás loguado `<TweetsPage onLogout={handleLogout} isLogged={isLogged}/>`

```js
  return (
    <div className="App">
      {isLogged ? ( 
        <>
        <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
```

y así una y otra vez ... es decir... **ESTO ES UN PROBLEMA** y lo vamos arreglar otro día.. pero ahora vamos a hacer esto


Pero de verdad crees que `TweetPage` tiene que pasar `isLoged` debde de hacer de structuring isLoged? NO...

---
**nota** : quitamos el drak, y la  

 //   const className = clsx('tweetsPage', { dark, light: !dark });  
  const className = clsx(styles.tweetsPage, {  
    [styles.dark]: dark,  
    [styles.light]: !dark,  
  });  

---

...seguimos

El `ìsLogged`que introduces en la funcion como pa´rametro `function TweetsPage({onLogout, isLogged }) {` solo lo pasa a asu hijo como `<Layout title="What´s going on ..." isLogged={isLogged}>`. Entonces de todas las cosas que se pasan a `TweetPage` cuáles usa `TwetsPage` realmente, sólo `onLogout` las otras solo para dejarlo pasar. Entonces lo que se hace en estas ocasiones es :

`function TweetsPage({onLogout, ...rest }) {` pásame lo que usaré yo y lo demás me lo metes en un objeto `...rest` me da igual cuantas, me las metes ahí
`<Layout title="What´s going on ..." {rest}>` de esta manera todo lo que no sea onLogout TweetPage lo va a dejar pasar, hacemos un pasthrough
 
```js

import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { logout } from '../auth/service';
import Layout from '../../components/layout/Layout';



function TweetsPage({onLogout, ...rest }) {
  // inicializa array de tweets vacío con la funcion
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then( tweets => setTweets( tweets )).catch(error => {
      // Añade aquí el manejo de errores
      console.error("Error fetching tweets:", error);

      return function () {
        console.log('Exit');
      };
    });

  }, []); // El array de dependencias vacío indica que el efecto solo se ejecuta en el montaje
  
  
  const handleLogout = async () => {
    await logout();
    onLogout();
  }
  
    return (
      <Layout title="What´s going on ..." isLogged={isLogged}>
        <div className="TweetPage">
          <Button onClick={handleLogout}>LogOut</Button>
          {tweets.length ? <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
                              {tweets.map(tweet => (
                                <li key={tweet.id}>
                                  <span>{tweet.message}</span>
                                </li>
                              ))}
                            </ul> : <Button $variant="primary">Be the firts one...</Button>
          }
        </div>
      </Layout>
    );
}

// lo exporto
export default TweetsPage;

```

Layaou lo mismo y se lo pasa al siguiente

```js
function Layout({ title, children, ...rest }) {
  return (
    <div>
      <Header {...rest}/>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
```

entonces el objeto `...rest` cusualmente ahora hay `isLoged` que llega a l Header, que es quien realmente lo necesita en su funcion

```js
function Header( {isLogged} ) {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                {isLogged ? (<Button>logout</Button>) : 
                            (<Button variant= "primary">Log in</Button>)
                }
            </nav>
        </header>
    );
}
```

Y ahora en el button tendremos que ponerle la lógica del click y el metodo de esa logica que antes estaba en `tweetsPage` y le quieto el `<Button onClick={handleLogout}>LogOut</Button>`
```js
const handleLogout = async () => {
  await logout();
  onLogout();
}
```

y el `onLogout()` lo has de recibir por props que viene desde app y `function Header( {isLogged, onLogout} ) {`

y ahora en `TweetsPage` las propiedades que recibe todas, se las pasa al siguiente, entonces a esas propiedades son las `props`. "Props" es una abreviatura de "propiedades". En esencia, son datos que se pasan de un componente padre a un componente hijo en una aplicación.


```js
function TweetsPage(props) {

  ...


return (
<Layout title="What´s going on ..." {...props}>
```


### Context

Vamos hacer un tunel directo entre estados.


**1. creamos un contexto**

Para tenerlo al lado de los componentes de `auth` me creo un contexto. `auth/context.js`

```js
import { createContext } from "react";

export const AuthContext = createContext(false);
```

me voy a `app`. ¿quien quiere tener acceso a saber soi esty legueado o no? pues `<TweetsPage>` porque de el depende que le diga ... , seguramente `<LoginPage></LoginPage>` al final hemos de pensar donde ponemos ese `provider` proque o que queda fuera de ese `provider` no tiene acceso a ese contexto. 

Pero en nuestro caso como en princpio esto tiene que valer para toda la aplicación lo podemos poner al principio importanto el `AuthContext.Provider`

```js
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); 

  return (
    <AuthContext.Provider>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage onLogin={handleLogin} />
            )}
      </div>
    </AuthContext.Provider>
  );
}
```

**2. proveer el contexto**

Quiero poner un valor en este `Provider` vavue, pero incluso puedo poner funciones. Entonces puedo crearme un objeto que tenga las tres cosas, por un lado estos dos metodos : `const handleLogin = () => setIsLogged(true);` , `const handleLogout = () => setIsLogged(false);` 
creo el metodo

```js
const authValue = {
  isLogged,
  onLogout: handleLogout,
  onLogin: handleLogin
}
```

Luego ya tengo todo puesto en contexto: esto es un estado `const [isLogged, setIsLogged] = useState(initiallyLogged);` junto un par de funciones,  `const handleLogin = () => setIsLogged(true);` , `const handleLogout = () => setIsLogged(false);` yo me he creado un objeto `const authValue`  y este objeto lo pongo en elcontexto:

```js
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
```

**3. Consumimos el contexto**

es decir, cualquier componente que utilice `AuthContext` y le pase este el contexto siempre y vuando esté dentro de este `Provider`:
es decir, siempre que un consumidor consuma `authContext` pasandole este context `Provider` tendrá acceso al objeto que está en el interior del metodo `authValue`

```js
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage onLogin={handleLogin} />
            )}
      </div>
    </AuthContext.Provider>
```

Si yo vou a `function Header( {isLogged, onLogout} ) {` y en vez de preocuparte de recivor los parámetos por `{isLogged, onLogout}` le puedo pasar los valores por contexto y los puedo sacar de la entrada de la función:

```js
function Header() {
    const { isLogged, onLogout } = useContext(AuthContext)
    ...

```

Ahora pasamos hacer limpieza y en layout podemos quitar el `...rest`

```js
function Layout({ title, children, ...rest }) {
  return (
    <div>
      <Header {...rest}/>
      <main>
```

```js
function Layout({ title, children}) {
  return (
    <div>
      <Header/>
      <main>
```

```js
function TweetsPage(props) {
    ...
    return (
      <Layout title="What´s going on ..." {...props}>
```

```js
function TweetsPage() {
    ...
    return (
      <Layout title="What´s going on ...">
```

```js
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
```

```js
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage/>
```

Lo mismo con `LoginPage()` , olvídate de pasar datos si los tienes en el contexto

```js
function LoginPage( {onLogin} ) {
```

```js
function LoginPage() {
    const {onLogin} = useContext(AuthContext)
```

y si el dia de mañana tienes que mover login no tienes que preocuparte de si su padre le sigue pasando las props o no, porque yo estoy conectado al contexto ymientras haya contexto yo lo recibo.

Tdos estos `isLogin` vienen ahora del mismo sitio, vienen de`app` de aqui `  const [isLogged, setIsLogged] = useState(initiallyLogged);` y los hemos empaquetado para pasárselos al ` <AuthContext.Provider value={authValue}>`
```js
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  ...

   <AuthContext.Provider value={authValue}>
```


### Refactoring


En `LoginPage.js` Para sacar el datos del contexto  `const {onLogin} = useContext(AuthContext);` tengo que importar `import { useState, useContext } from 'react';`, `import { AuthContext } from './context';`

Cuando nos pase esto podemos crearnos un `custom Hok` que es una funciona que utiliza dentro o tra funciona para usarla en componentes:

vamos a `context.js` y creo la funcion userAuth 

```js
import { createContext, useContext } from "react";


export const AuthContext = createContext(false);

export const userAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}
```

y en LoginPage.js hago esto que es lo mismo pero me quito importar cosasy saber donde está mi contexto, y desacoplas de donde sacas la infromacion y lo que se cuenta por dentrás te da igual

```js
const {onLogin} = useContext(AuthContext);
```

```js
function LoginPage() {
    const {onLogin} = userAuth();
```

y en el `Header.js` lo mismo

```js
function Header() {
    const { isLogged, onLogout } = useContext(AuthContext)
```

```js
function Header() {
    const { isLogged, onLogout } = useContext(AuthContext)
```

Vamos ahora a la `App` tienes todo eso para manejar el estado:

```js
  // esto
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  // esto
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false); 

  // esto
  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin}

  // esto
  return (
    <AuthContext.Provider value={authValue}>
```

es como una cosa muy concreta que podríamos sacar fuera y dejarlo en un componenet que tenga la responsabilidad de manejar el estado y poner en contexto y ya está.

Creamos en el mismo file de `contex.js` y creamos el componente `AuthContextProvider()` y quiero saber donde pongo el provider y el custom Hook

Me cogido de `app` todo esto esto , he movido cosas simplemente
```js
export const AuthContextProvider = () => {
    const [isLogged, setIsLogged] = useState(initiallyLogged);

    const handleLogin = () => setIsLogged(true); 
    const handleLogout = () => setIsLogged(false); 

    const authValue = {
        isLogged,
        onLogout: handleLogout,
        onLogin: handleLogin
    }

    return (
        <AuthContext.Provider value={authValue}> </AuthContext.Provider>
    );
}
```

Y ahora puedo combiar cosas en `App` que está así

```js
function App({ initiallyLogged }) {
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage onLogin={handleLogin} />
            )}
      </div>
    </AuthContext.Provider>
  );
}
```

y lo combiamos por 

```js
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import NewTweetPage from './pages/tweets/NewTweetPage';
import { AuthContextProvider } from './pages/auth/context';
import { useAuth } from './pages/auth/context';


function App({ initiallyLogged }) {
  const { isLogged } = useAuth();
  return (
    <AuthContextProvider initiallyLogged={initiallyLogged}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage />
            )}
      </div>
    </AuthContextProvider>
  );
}

export default App;
```

Y ¿como se llama la propieda que hay dentro de `<AuthContextProvider> </AuthContextProvider>`? CHILDREN, por l otanto tendras que pasarle children al **context** `export const AuthContextProvider = ( {initiallyLogged, children} ) => {`

es comun que cuando crees custom Hooks para contexto, todos van a necesitar pasar children 

```js
export const AuthContextProvider = ( {initiallyLogged, children} ) => {
    const [isLogged, setIsLogged] = useState(initiallyLogged);

    const handleLogin = () => setIsLogged(true); 
    const handleLogout = () => setIsLogged(false); 

    const authValue = {
        isLogged,
        onLogout: handleLogout,
        onLogin: handleLogin
    }

    return (
        <AuthContext.Provider value={authValue}> {children} </AuthContext.Provider>
    );
}
```


voy a `index.js` le paso `<AuthContextProvider initiallyLogged={!!accesToken}>` le quito a `App` esto que ya no necesita `{!!accesToken}`


```js
root.render(
  <React.StrictMode>
   <AuthContextProvider initiallyLogged={!!accesToken}>
     <App />,
   </AuthContextProvider>
  </React.StrictMode>,
);
```


```js
function App() {
  const { isLogged } = useAuth();
  return (
    <AuthContextProvider>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage />
            )}
      </div>
    </AuthContextProvider>
  );
}
```

Es decir, tenemos toda nuestra aplicacion envuelta con Provider

```js
root.render(
  <React.StrictMode>
   <AuthContextProvider initiallyLogged={!!accesToken}>
     <App />,
   </AuthContextProvider>
  </React.StrictMode>,
);
```

te da fallo en el login porque tienes que quitar `<AuthContextProvider>` al app

```js
  return (
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage />
            )}
      </div>
  );
```

esto es porque en el indes ya está `<AuthContextProvider>` y lo lee dos veces


### Descargo cambios de repo remoto
----

SE HAN HECHO CAMBIOS DESDE EL REPOSITORIO Y VOY A INTRODUCIR ESTOA CAMBIO VÍA GIRHUB:

https://github.com/KeepCodingWeb15/twitter-react/commit/a9f1b07ade3e63703cb69bf840988630b04615d3

```sh
git clone https://github.com/KeepCodingWeb15/twitter-react/tree/main
cd twitter-react
git checkout a9f1b07                 # hash-del-commit cuando se hicienreon cambios
npm install                          # Instala las dependencias del repo descargado
npm start                            # Inicia la aplicación React
```

----



### enrutados en el cliente

History API https://developer.mozilla.org/en-US/docs/Web/API/History_API

La History API proporciona una interfaz para manipular el historial de sesiones del navegador (la historia del navegador que el usuario ha navegado en la pestaña actual). Es parte del estándar HTML5 y proporciona funciones sencillas para interactuar con la pila de historial del navegador. Puedes utilizar esta API para modificar el historial del navegador sin necesidad de recargar la página.

Aquí hay algunas cosas que puedes hacer con la History API:

* Manipular el historial del navegador: Puedes añadir, modificar y eliminar entradas del historial.
* Navegar por el historial: Puedes moverte hacia adelante y hacia atrás a través del historial del navegador, de manera similar a los botones "Atrás" y "Adelante" del navegador.
* Guardar estados en el historial: Puedes asociar un estado específico del JavaScript con una entrada del historial. Por ejemplo, si estás construyendo una aplicación de página única (SPA), puedes guardar el estado de la página para que el usuario pueda volver a ella usando el botón "Atrás" del navegador.

Funciones principales de la History API:

* history.pushState(): Añade una entrada al historial del navegador sin cambiar la página que el usuario está viendo. Esto es útil para cambiar la URL visible sin recargar la página, como en una aplicación de página única (SPA).
* history.replaceState(): Similar a pushState, pero modifica la entrada actual del historial en lugar de crear una nueva. Esto es útil cuando quieres actualizar la URL o el estado de la historia debido a una acción del usuario, pero no quieres que esa acción cree una nueva entrada en el historial.
* history.back(): Funciona como el botón "Atrás" del navegador, llevando al usuario a la página anterior en el historial.
* history.forward(): Funciona como el botón "Adelante" del navegador, llevando al usuario a la página siguiente en el historial.
* history.go(): Permite navegar a una página específica dentro del historial del navegador, donde se puede pasar un número entero como argumento para moverse esa cantidad de pasos a través del historial (por ejemplo, -1 es igual a history.back() y 1 es igual a history.forward()).

La History API es fundamental en las aplicaciones de página única, ya que permite actualizar la URL visible para el usuario sin recargar la página completa, lo cual es crucial para la experiencia del usuario y el rendimiento de la aplicación. Además, facilita la gestión de estados en aplicaciones web complejas, manteniendo consistente la funcionalidad de navegación del navegador.


**React Router** Client side routing

Objetivo: sincroniza la url del browser sincronizada con mi lista. No salimos del servidor.

React Router es una biblioteca de enrutamiento estándar para React, una biblioteca de JavaScript para construir interfaces de usuario. React Router permite la navegación entre distintas componentes en una aplicación React, manejando la sincronización entre la URL en la barra de direcciones del navegador y la vista que se muestra al usuario. Esto es particularmente importante en aplicaciones de una sola página (SPA, por sus siglas en inglés), donde la navegación tradicional de recargar la página no es deseada.

React Router utiliza la History API bajo el capó para mantener la interfaz de usuario y la URL sincronizadas. Aquí hay algunas cosas que React Router facilita:

1. Navegación Declarativa: Puedes definir rutas utilizando componentes de React, lo que permite una forma declarativa de mapear rutas a tus componentes.
2. Navegación Dinámica: Con React Router, puedes manejar rutas dinámicas y parámetros de URL, lo que es útil para páginas de detalles de productos, perfiles de usuario y otras páginas dinámicas.
3. Navegación Anidada: Permite definir rutas dentro de rutas, lo que es útil para crear aplicaciones con muchas capas de navegación.
4. Componentes de Navegación: React Router proporciona componentes como `<Link>`, `<NavLink>`, `<Outlet>` y `<Routes>`, que facilitan la creación de enlaces de navegación y la representación de componentes basados en la URL actual.
5. Gestión del Historial: Aunque puedes interactuar directamente con la History API, React Router maneja esto por ti y proporciona herramientas para trabajar con el historial del navegador de una manera que se integra bien con las aplicaciones React.
6. Transiciones de Rutas: Puedes fácilmente configurar animaciones y comportamientos cuando el usuario navega entre rutas.
7. Rutas Protegidas: React Router facilita la creación de rutas que requieren autenticación, permitiéndote proteger ciertas partes de tu aplicación.

En resumen, React Router ofrece una capa de abstracción por encima de la History API para trabajar con el sistema de enrutamiento en una aplicación React. Permite desarrollar aplicaciones complejas de una sola página con enrutamiento que imita la navegación tradicional de la web, sin perder las ventajas de tener una SPA.

```sh
npm install react-router-dom
```

La manera más basica de utilizar, es ir al index y dentro del index hacerun import `import { BrowserRouter } from 'react-router-dom';` y en volver toda la aplicacion con `</BrowserRouter>` así lo creamos y lo ponemos en contexto, 

```js
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider initiallyLogged={!!accessToken}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
```

así le permites utilizarlo. Esto es lo mismo que pone en la diapositiva / slide

```js
const router = createBrowserRouter(

)
...

<RouterProvider router={router} /> 
```
en vez de pasar el objeto `router` nosotros haremos la manera facil de importat en `index` y envolver la palicacion `</BrowserRouter>`. En algún monento necesitaremos el objeto para utilizarlo por mi mismo pero ya lo haremos.

Todo lo que quede dentro de aquí `</BrowserRouter>` puedo utilizar todo. Luego necesitaremos crear rutas dentro de `app`. Tenemos para crea rutas varios componentes `Routes` es para decir que harás una agregacion de rutas

`App()` 

Nuestro componente Router sirve para inticar `aquí dentro quiero meter rutas` para hacer una agregacion de rutas. Queremos meter rutas a todo esto

```js
  return isLogged ? ( 
          <Layout>
            <TweetsPage />
             {/* <NewTweetPage/> */}
              </>
          <Layout/>
              ) : (
          <LoginPage />
            )}
        );
```

Vamos is asociando rutas por cada una de laspñaginas y lo definimos todo dentro de un `<Routes/>` 

Los componentes `<Route></Route>` han de ser siempre como hijos directos de `<Routes>`

```js
    <Routes>
      <Route path="/login" element={<LoginPage />} />
```

Les estoy diciendo que, quiero que la ruta `/login` esté asociada con el componente `<LoginPage></LoginPage>` que es `import LoginPage from './pages/auth/LoginPage';` para asociar una ruta le pasas ptah `path="/login"` y el elemento `<LoginPage />`

En este momento si vas a `localhost:3000/Login` pintará la pag; pero si vas a **`localhost:3000/tweets`** no hará nada porque no está resolviendo.

Definimos una **ruta dinámica**: `<Route path="/tweets/:tweetId"` con los **:** le decimos que el id será dinámico. Y luego dentro de elemento vas a tener acceso y te servirá para que el componete pida el tweet correspondiente `element={<Layout ><div>Hola Tweet</div><Layout />`

**Redirecciones**: `<Route path="/" element={<Navigate to="/tweets" />} />` la ruta **path/** no es neesarrio meterle un `element` simplemente envíale a `/tweets` 

Esta estructura jerárquica permite una mejor organización del enrutamiento, especialmente en aplicaciones más grandes y complejas. Cada ruta padre puede tener su propio componente y, a su vez, puede incluir rutas hijas que representan diferentes secciones o páginas dentro de ese componente padre.

Cada nivel del árbol representa una ruta en la aplicación, y las rutas hijas representan diferentes secciones o páginas dentro de la ruta padre. Esto permite una navegación clara y estructurada en la aplicación. La estructura del árbol de rutas se vería así:

* / (raíz)
* * Redirige a /tweets
* /login
* * Muestra LoginPage
* /tweets (utiliza Layout)
* * / (index)
* * * Muestra TweetsPage
* * /:tweetId
* * * Muestra TweetPage (detalles de un tweet específico)
* /new
* * Requiere autenticación (RequireAuth)
* * Muestra NewTweetPage (crear nuevo tweet)
* /404
* * Muestra un mensaje de error 404
* `*`(cualquier otra ruta)
* * Redirige a /404


```js
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      // Asocia la ruta `/login` con el componente `LoginPage`. 
      // Al visitar `/login`, se mostrará `LoginPage`.

      <Route path="/tweets" element={<Layout />}>
        // Define una ruta base `/tweets` que utiliza `Layout` como su componente.
        // `Layout` puede incluir elementos comunes como cabecera, pie de página, etc.

        <Route index element={<TweetsPage />} />
        // Ruta por defecto para `/tweets`. Al visitar `/tweets`, se muestra `TweetsPage`.
        // Es como un "subruta" dentro de `/tweets`.

        <Route path=":tweetId" element={<TweetPage />} />
        // Ruta dinámica bajo `/tweets`. Captura cualquier valor como `tweetId` y 
        // muestra `TweetPage`, ideal para mostrar detalles de un tweet específico.

        <Route path="new" element={
            <RequireAuth>
              <NewTweetPage />
            </RequireAuth>
          }
        />
        // Ruta `/tweets/new` protegida por `RequireAuth`. Solo usuarios autenticados 
        // pueden acceder a `NewTweetPage`. Si no están autenticados, `RequireAuth` 
        // debería redirigirlos o mostrar un mensaje.
      
      </Route>

      <Route path="/" element={<Navigate to="/tweets" />} />
      // Redirección de la ruta raíz `/` a `/tweets`. Al visitar `/`, el usuario 
      // es automáticamente redirigido a `/tweets`.

      <Route path="/404" element={<div>404 | Not found</div>} />
      // Ruta `/404` muestra un simple mensaje de error 404 - No encontrado.
      // esta ruta podrás redirigir al usuario en cualquier momento aquí

      <Route path="*" element={<Navigate to="/404" />} />
      // Cualquier otra ruta no definida anteriormente redirige a `/404`. 
      // Es una especie de captura-todo para rutas no encontradas.

    </Routes>
  );
}
```


me cro una nueva carpeta para `tweets/TweetPage/`  y dentro `index.js` y `tweetsPage.js` 

└── tweets  
    ├── NewTweetPage  
    │   ├── NewTweetPage.css  
    │   ├── NewTweetPage.js  
    │   └── index.js  
    ├── TweetPage  
    │   ├── TweetPage.js  
    │   └── index.js  
    ├── TweetsPage  
    │   ├── TweetsPage.css  
    │   ├── TweetsPage.js  
    │   ├── TweetsPage.module.css  
    │   └── index.js  
    ├── components  
    │   ├── LikeButton.css  
    │   ├── LikeButton.js  
    │   ├── Tweet.css  
    │   └── Tweet.js  
    └── service.js  