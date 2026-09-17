# Formulario explicativo de Métodos Numéricos

## 0. Idea general

Los métodos numéricos buscan una solución aproximada de un problema matemático cuando la solución exacta:

- no se puede obtener fácilmente;
- requiere resolver una ecuación complicada;
- depende de datos experimentales;
- o debe calcularse mediante un computador.

En todo método numérico se debe distinguir entre el **valor verdadero** y el **valor aproximado**.

---

# 1. Errores numéricos

## 1.1 Valor verdadero y valor aproximado

- $x_v$: valor verdadero o exacto.
- $x_a$: valor aproximado calculado por el método.

Ejemplo: si la solución exacta es $x_v=2$ y un método obtiene $x_a=1.98$, entonces el resultado es aproximado.

## 1.2 Error verdadero o error real

El **error verdadero** sale de comparar el valor verdadero con el valor aproximado:

$$
E_t = x_v-x_a
$$

Su magnitud, sin importar el signo, es:

$$
|E_t|=|x_v-x_a|
$$

### Significado de los símbolos

- $E_t$: error verdadero, también llamado error real.
- $x_v$: valor verdadero.
- $x_a$: valor aproximado.
- $|\ |$: valor absoluto.

El signo indica si la aproximación quedó por encima o por debajo del valor verdadero.

- Si $E_t>0$, entonces $x_a<x_v$.
- Si $E_t<0$, entonces $x_a>x_v$.

### Importante

El error verdadero solo puede calcularse si conocemos $x_v$. En muchos problemas reales no conocemos la solución exacta; por eso usamos el error aproximado.

## 1.3 Error relativo verdadero

Compara el error con el tamaño del valor verdadero:

$$
\varepsilon_t=\frac{x_v-x_a}{x_v}
$$

En magnitud:

$$
|\varepsilon_t|=\left|\frac{x_v-x_a}{x_v}\right|
$$

## 1.4 Error porcentual verdadero

$$
\varepsilon_{t,\%}=\left|\frac{x_v-x_a}{x_v}\right|\times100
$$

Este resultado se expresa en porcentaje.

### Ejemplo

Si $x_v=10$ y $x_a=9.8$:

$$
E_t=10-9.8=0.2
$$

$$
\varepsilon_{t,\%}=\frac{0.2}{10}\times100=2\%
$$

## 1.5 Error aproximado

Cuando no conocemos $x_v$, comparamos dos aproximaciones consecutivas:

$$
E_a=x_i-x_{i-1}
$$

Su magnitud es:

$$
|E_a|=|x_i-x_{i-1}|
$$

- $x_i$: aproximación actual.
- $x_{i-1}$: aproximación anterior.

El error aproximado indica cuánto cambió el resultado entre una iteración y la siguiente.

## 1.6 Error relativo aproximado

$$
\varepsilon_a=\frac{x_i-x_{i-1}}{x_i}
$$

En magnitud:

$$
|\varepsilon_a|=\left|\frac{x_i-x_{i-1}}{x_i}\right|
$$

## 1.7 Error porcentual aproximado

$$
\varepsilon_{a,\%}=\left|\frac{x_i-x_{i-1}}{x_i}\right|\times100
$$

Este error se usa normalmente para detener un método:

$$
\varepsilon_{a,\%}<\text{tolerancia}
$$

Por ejemplo, si la tolerancia es $0.01\%$, se detiene cuando el error porcentual aproximado sea menor que $0.01\%$.

## 1.8 Error de redondeo y error de truncamiento

### Error de redondeo

Aparece porque el computador solo guarda una cantidad limitada de cifras.

Ejemplo:

$$
\pi=3.14159265\ldots\approx3.14
$$

La diferencia entre el número real y el número guardado es error de redondeo.

### Error de truncamiento

Aparece cuando reemplazamos un proceso infinito por uno finito.

Ejemplo:

$$
 e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
$$

Si usamos solo:

$$
 e^x\approx1+x+\frac{x^2}{2!}
$$

los términos que no incluimos producen error de truncamiento.

---

# 2. Ecuaciones de una variable

Una ecuación de una variable se escribe como:

$$
f(x)=0
$$

- $x$: variable desconocida.
- $f$: función o regla que recibe $x$ y produce un resultado.
- $f(x)$: valor de la función evaluada en $x$.
- $x_r$: raíz o solución, porque cumple $f(x_r)=0$.

Ejemplo:

$$
f(x)=x^2-4
$$

Las raíces son $x=2$ y $x=-2$, porque $f(2)=0$ y $f(-2)=0$.

---

# 3. Método de bisección

## 3.1 Idea

El método de bisección necesita un intervalo inicial $[x_l,x_u]$ donde la función cambie de signo:

$$
f(x_l)f(x_u)<0
$$

Por el teorema del valor intermedio, si la función es continua, dentro del intervalo existe al menos una raíz.

- $x_l$: límite inferior o extremo izquierdo.
- $x_u$: límite superior o extremo derecho.

## 3.2 Fórmula del punto medio

$$
x_r=\frac{x_l+x_u}{2}
$$

- $x_r$: punto medio y nueva aproximación de la raíz.

Se calcula $f(x_r)$ y se conserva la mitad del intervalo que mantiene el cambio de signo.

### Decisión del nuevo intervalo

Si:

$$
f(x_l)f(x_r)<0
$$

entonces la raíz está entre $x_l$ y $x_r$:

$$
x_u=x_r
$$

Si:

$$
f(x_l)f(x_r)>0
$$

entonces la raíz está entre $x_r$ y $x_u$:

$$
x_l=x_r
$$

Si $f(x_r)=0$, se encontró la raíz exacta dentro de la precisión usada.

## 3.3 Error aproximado en bisección

A partir de dos aproximaciones consecutivas:

$$
\varepsilon_{a,\%}=\left|\frac{x_{r,\text{nuevo}}-x_{r,\text{anterior}}}{x_{r,\text{nuevo}}}\right|\times100
$$

También se puede usar el tamaño máximo del intervalo como cota del error:

$$
E\leq\frac{x_u-x_l}{2}
$$

Después de $n$ bisecciones, la longitud del intervalo es:

$$
L_n=\frac{x_u-x_l}{2^n}
$$

## 3.4 Ventajas y limitaciones

- Es seguro si la función es continua y cambia de signo.
- Siempre reduce el intervalo a la mitad.
- Es lento comparado con Newton o secante.
- No funciona directamente si no hay cambio de signo, por ejemplo, para una raíz de multiplicidad par.

---

# 4. Método de punto fijo

## 4.1 Transformación de la ecuación

Se parte de:

$$
f(x)=0
$$

y se despeja una forma equivalente:

$$
x=g(x)
$$

La función $g$ se llama función de iteración.

## 4.2 Fórmula iterativa

$$
x_{i+1}=g(x_i)
$$

- $x_i$: aproximación actual.
- $x_{i+1}$: siguiente aproximación.
- $g(x)$: función que genera la siguiente aproximación.

La solución buscada es un punto que no cambia al aplicar $g$:

$$
x=g(x)
$$

Por eso se llama punto fijo.

## 4.3 Error aproximado

$$
\varepsilon_{a,\%}=\left|\frac{x_{i+1}-x_i}{x_{i+1}}\right|\times100
$$

Se detiene cuando este valor es menor que la tolerancia.

## 4.4 Condición de convergencia

Una condición suficiente cerca de la solución es:

$$
|g'(x)|<1
$$

- $g'(x)$: derivada de la función de iteración.

Si $|g'(x)|<1$, las aproximaciones suelen acercarse al punto fijo. Si $|g'(x)|>1$, normalmente se alejan o divergen.

---

# 5. Método de Newton-Raphson

## 5.1 Fórmula

$$
x_{i+1}=x_i-\frac{f(x_i)}{f'(x_i)}
$$

- $f(x_i)$: valor de la función en la aproximación actual.
- $f'(x_i)$: derivada de la función en $x_i$.
- $x_i$: aproximación actual.
- $x_{i+1}$: nueva aproximación.

## 5.2 De dónde sale la fórmula

Se usa la recta tangente a la curva $y=f(x)$ en $x_i$:

$$
y-f(x_i)=f'(x_i)(x-x_i)
$$

Para encontrar dónde la tangente cruza el eje $x$, se hace $y=0$:

$$
-f(x_i)=f'(x_i)(x-x_i)
$$

Despejando $x$:

$$
x=x_i-\frac{f(x_i)}{f'(x_i)}
$$

Ese nuevo valor es $x_{i+1}$.

## 5.3 Error aproximado

$$
\varepsilon_{a,\%}=\left|\frac{x_{i+1}-x_i}{x_{i+1}}\right|\times100
$$

## 5.4 Precauciones

- No se debe usar si $f'(x_i)=0$.
- Una mala aproximación inicial puede hacer que el método diverja.
- Puede saltar hacia otra raíz.
- Cuando converge, normalmente lo hace muy rápido.

---

# 6. Interpolación

La interpolación estima un valor **dentro** del intervalo de datos conocidos.

Datos:

$$
(x_0,y_0),(x_1,y_1),\ldots,(x_n,y_n)
$$

Generalmente $y_i=f(x_i)$.

- $x_i$: valores conocidos de la variable independiente.
- $y_i$: valores conocidos de la variable dependiente.
- $x$: valor donde se quiere estimar.
- $P(x)$: polinomio aproximado.

## 6.1 Interpolación lineal

Con dos puntos $(x_0,y_0)$ y $(x_1,y_1)$:

$$
y\approx y_0+\frac{y_1-y_0}{x_1-x_0}(x-x_0)
$$

El término:

$$
\frac{y_1-y_0}{x_1-x_0}
$$

es la pendiente de la recta.

## 6.2 Polinomio de Lagrange

$$
P_n(x)=\sum_{i=0}^{n}y_iL_i(x)
$$

donde:

$$
L_i(x)=\prod_{\substack{j=0\\j\neq i}}^{n}\frac{x-x_j}{x_i-x_j}
$$

- $P_n(x)$: polinomio interpolante de grado máximo $n$.
- $L_i(x)$: polinomio base de Lagrange.
- $\sum$: suma de todos los términos.
- $\prod$: multiplicación de los factores indicados.
- $j\neq i$: se multiplican todos los factores excepto el que tiene $j=i$.

## 6.3 Interpolación de Newton con diferencias divididas

El polinomio se escribe como:

$$
P_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+f[x_0,x_1,x_2](x-x_0)(x-x_1)+\cdots
$$

Primera diferencia dividida:

$$
f[x_i,x_{i+1}]=\frac{f(x_{i+1})-f(x_i)}{x_{i+1}-x_i}
$$

Segunda diferencia dividida:

$$
f[x_i,x_{i+1},x_{i+2}]=\frac{f[x_{i+1},x_{i+2}]-f[x_i,x_{i+1}]}{x_{i+2}-x_i}
$$

Cada orden nuevo se calcula usando dos diferencias del orden anterior.

## 6.4 Error de interpolación

Si $f$ tiene suficientes derivadas, el error teórico es:

$$
E(x)=f(x)-P_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)(x-x_1)\cdots(x-x_n)
$$

para algún $\xi$ dentro del intervalo.

- $f^{(n+1)}(\xi)$: derivada de orden $n+1$ evaluada en un punto desconocido $\xi$.
- $(n+1)!$: factorial de $n+1$.
- $P_n(x)$: valor interpolado.

En la práctica, si no conocemos $f(x)$, calculamos el error comparando con otro polinomio o con un dato adicional.

---

# 7. Extrapolación y aproximación

## 7.1 Extrapolación

La extrapolación estima un valor **fuera** del intervalo de datos conocidos. Se usan las mismas fórmulas de interpolación, pero el resultado suele ser menos confiable porque se aleja de los datos.

## 7.2 Aproximación por mínimos cuadrados

Cuando los datos no están exactamente sobre una curva, se busca una función que pase lo más cerca posible de todos los puntos.

Para una recta:

$$
\hat y=a_0+a_1x
$$

- $\hat y$: valor estimado.
- $a_0$: intercepto, valor estimado cuando $x=0$.
- $a_1$: pendiente.

Los coeficientes se obtienen resolviendo:

$$
\begin{bmatrix}
n & \sum x_i\\
\sum x_i & \sum x_i^2
\end{bmatrix}
\begin{bmatrix}
a_0\\a_1
\end{bmatrix}
=
\begin{bmatrix}
\sum y_i\\
\sum x_iy_i
\end{bmatrix}
$$

La recta minimiza la suma de los cuadrados de los residuos:

$$
S_r=\sum_{i=1}^{n}(y_i-\hat y_i)^2
$$

- $y_i$: dato observado.
- $\hat y_i$: valor calculado por el modelo.
- $y_i-\hat y_i$: residuo o diferencia entre dato y modelo.
- $S_r$: suma de cuadrados de los residuos.

## 7.3 Error o residuo de aproximación

Para cada punto:

$$
e_i=y_i-\hat y_i
$$

El residuo no es exactamente lo mismo que el error verdadero: mide la diferencia entre un dato observado y el modelo aproximado.

---

# 8. Criterios de parada

Un método iterativo puede detenerse cuando se cumple uno o varios criterios:

1. **Error aproximado pequeño**

$$
\varepsilon_{a,\%}<\text{tolerancia}
$$

2. **Función cercana a cero**

$$
|f(x_i)|<\text{tolerancia}
$$

3. **Máximo de iteraciones**

Se detiene para evitar un ciclo infinito si el método no converge.

4. **Intervalo pequeño**, en bisección

$$
\frac{x_u-x_l}{2}<\text{tolerancia}
$$

---

# 9. Tabla rápida de símbolos

| Símbolo | Significado |
|---|---|
| $x_v$ | Valor verdadero o exacto |
| $x_a$ | Valor aproximado |
| $x_i$ | Aproximación actual |
| $x_{i-1}$ | Aproximación anterior |
| $x_{i+1}$ | Siguiente aproximación |
| $E_t$ | Error verdadero absoluto con signo |
| $E_a$ | Cambio entre aproximaciones |
| $\varepsilon_t$ | Error relativo verdadero |
| $\varepsilon_a$ | Error relativo aproximado |
| $f(x)$ | Función evaluada en $x$ |
| $f'(x)$ | Derivada de $f$ |
| $g(x)$ | Función de iteración de punto fijo |
| $x_l$ | Límite inferior del intervalo |
| $x_u$ | Límite superior del intervalo |
| $x_r$ | Aproximación en bisección |
| $P_n(x)$ | Polinomio interpolante |
| $n$ | Número de orden o cantidad de datos relacionada |
| $\xi$ | Punto desconocido dentro del intervalo |
| $\sum$ | Suma |
| $\prod$ | Producto o multiplicación |
| $!$ | Factorial |

---

# 10. Fórmulas esenciales para memorizar

$$
E_t=x_v-x_a
$$

$$
\varepsilon_{t,\%}=\left|\frac{x_v-x_a}{x_v}\right|\times100
$$

$$
\varepsilon_{a,\%}=\left|\frac{x_i-x_{i-1}}{x_i}\right|\times100
$$

$$
x_r=\frac{x_l+x_u}{2}
$$

$$
x_{i+1}=g(x_i)
$$

$$
x_{i+1}=x_i-\frac{f(x_i)}{f'(x_i)}
$$

$$
y\approx y_0+\frac{y_1-y_0}{x_1-x_0}(x-x_0)
$$

**Regla práctica:** siempre escribe primero qué valor tienes, qué valor buscas y qué tolerancia te piden. Luego identifica si necesitas el error verdadero, el error aproximado o el error porcentual.
