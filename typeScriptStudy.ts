function getLength(v:string | undefined) {
    if (!idDefined(v)) {
        return 0
    }

    return v!.length
}

function idDefined(value: any) {
    return value !== undefined && value !== null
}