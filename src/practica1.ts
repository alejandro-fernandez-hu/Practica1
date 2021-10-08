type Person = {
    nombre: string,
    edad: number,
    amigos: Array<Friend>,
    perro?: string,
    pareja?: Person,
}
type Friend = {
    nombre: string,
    edad: number,
}

const amigo1: Friend = {
    nombre: "Alejandro",
    edad: 21
}

const amigo2: Friend = {
    nombre: "Alvaro",
    edad: 20
}

const persona1: Person = {
    nombre: "Pablo",
    edad: 21,
    amigos: [amigo1, amigo2],
    perro: "pinpin",
    pareja: { nombre: "Maria", edad: 18, amigos: [amigo1, amigo2], pareja: { nombre: "Pablo", edad: 21, amigos: [amigo1, amigo2], } }
}

const cout = (p: any, a: string): string => {
    if (!Array.isArray(p) && typeof (p) !== "object") {
        a += p;
        return a;
    }
    else if (Array.isArray(p)) {
        a += "[";
        p.forEach((z: any) => {
            a += `${cout(z, "")},`
        })
        a = a.slice(0, a.length - 1)
        a += "]"
        return a;
    }
    else if (typeof (p == "object")) {
        a += "{";
        Object.keys(p).forEach((k: string) => {
            if (typeof (p[k]) === "object") {
                a += `"${k}":${cout(p[k], "")},`
            }
            else if (typeof (p[k]) === "string") {
                a += `"${k}":"${p[k]}",`
            }
            else {
                a += `"${k}":${p[k]},`
            }
        });
        a = a.slice(0, a.length - 1)
        a += "}";
        return a;
    }
    return a;

}

if (cout(persona1, "") == JSON.stringify(persona1)) console.log("funciona")