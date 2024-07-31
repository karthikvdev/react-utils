
export class JsonValidator {
    constructor(schema) {
        this.result = {}
        this.result.isError = false
        this.result.message = "";
        this.schema = schema

    }
    validate(val, childSchema, keyName) {
        if (childSchema) this.schema = childSchema

        Object.entries(this.schema).forEach((entries) => {
            if (!Object.keys(val).includes(entries[0]) && !entries[1].required) {
                delete this.schema[entries[0]]
            }
        })

        Object.keys(val).some((keys) => {
            if (!Object.keys(this.schema).includes(keys)) {
                this.result.message = `${keyName ? `${keyName}.` : ""}${keys} is not allowed`
                this.result.isError = true
                return true;
            }
        })
        if (this.result.message) return this.result

        Object.entries(this.schema).some((element, index) => {
            if (element[1].required && !Object.keys(val).includes(element[0])) {
                this.result.message = `${keyName ? `${keyName}.` : ""}${element[0]} is required`
                this.result.isError = true
                return true
            }
            else if (element[1].type === "array") {
                if (!Array.isArray(val[element[0]])) {
                    this.result.message = `${keyName ? `${keyName}.` : ""}${element[0]} should be ${element[1].type}`
                    this.result.isError = true
                }
                else if (element[1]?.element?.type === "object") {
                    val[element[0]].forEach((val, index) => {
                        this.validate(val, element[1]?.element?.schema, `${element[0]}.[${index}]`)
                    })
                }
                return true
            }
            else if (element[1].type === "object" && element[1]?.schema && Object?.values(element[1]?.schema)?.length) {
                this.validate(val[element[0]], element[1].schema, element[0])
            }
            else if (typeof val[element[0]] !== element[1].type) {
                this.result.message = `${keyName ? `${keyName}.` : ""}${element[0]} should be ${element[1].type}`
                this.result.isError = true
                return true
            }
            else {
                return;
            }
        })
        if (this.result.message) return this.result
        else {
            delete this.result.message
            return this.result
        }
    }

}

