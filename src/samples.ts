const headerBlurb = `
comment block start
comment block : GLS ((General Language Syntax)) is a single syntax
comment block : that compiles into common OOP languages.
comment block : ---
comment block : Write code in the editor,
comment block : and see the language output in real time!
comment block end`;

const prepare = (strings: TemplateStringsArray): string => {
    const source = `${headerBlurb}\n${strings[0]}\n`;

    return source.substring(source.search(/\S+/));
};

/* tslint:disable */

export const Samples = {
    Default: prepare`
file start : Program
    main start
        print : ("GLS is awesome!")
        print : ("Select a sample above to see how it works!")
    main end
file end`,
    Variables: prepare`
file start : Program
    main start
        comment line : Simple declarations
        variable : foo string
        variable : bar number 7
        
        comment line : Assignments
        variable : qux string foo
        variable : baz number bar
        
        comment line : Interesting values
        variable : quux number infinity
        variable : corge boolean true
    main end
file end`,
    Operations: prepare`
file start : Program
    main start
        variable : foo number 7
        
        comment line : Operation chains
        operation : foo (multiply by) 2
        operation : foo (decrease by) bar times { parenthesis : { operation : bar minus 3 } }
        variable : bar number { operation : foo (divide by) 3 plus 4 times foo }
        
    main end
file end`,
    Conditionals: prepare`
file start : Program
    main start
        comment line : Conditionals
        if start : { operation : 2 plus 2 (equal to) 4 }
            print : ("Seems legit")
        else if start : { operation : 2 plus 2 (equal to) 5}
            print : ("That seems wrong...")
        else start
            print : ("Math.")
        if end
    main end
file end`,
    "Arrays and Lists": prepare`
file start : Program
    main start
        comment line : Coming soon!
    main end
file end`,
    Dictionaries: prepare`
file start : Program
    main start
        comment line : Dictionary types
        variable : foo { dictionary type : string int } { dictionary new : string int }
        variable : bar { dictionary type : string { dictionary type : string int } } { dictionary new : string { dictionary new : string int } }
        
        comment line : Indices
        operation : { index : foo "baz" } equals 7
        variable : qux int { index : foo "baz" }
        
        comment line : In-place initialization
        variable start : aaa { dictionary type : string int } { dictionary new start : string int }
            dictionary pair : "bbb" 1 ,
            dictionary pair : "ccc" 2 ,
            dictionary pair : "ddd" 3
        dictionary new end
    main end
file end`,
    Loops: prepare`
file start : Program
    main start
        comment line : While
        while start : true
            print : "Hey!"
            break
        while end
        
        comment line : For ((range))
        for numbers start : i int 0 10
            print : i
        for numbers end
        
        comment line: For ((collection))
        variable start : container { dictionary type : string int } { dictionary new start : string int }
            dictionary pair : "bbb" 1 ,
            dictionary pair : "ccc" 2 ,
            dictionary pair : "ddd" 3
        dictionary new end
        
        for each pair start : container pair key string value int
            print : { concatenate : ("Looking at ") key  }
        for each end
    main end
file end`,
    Lambdas: prepare`
comment line : Coming soon!`,
    Classes: prepare`
file start : Program
    class start : Person
        comment doc start
        comment doc tag : summary The person's name.
        comment doc end
        member variable declare : private name string
        
        comment doc start
        comment doc tag : summary The person's age.
        comment doc end
        member variable declare : private age float
        
        comment doc start
        comment doc tag : parameter name The person's name.
        comment doc tag : parameter age The person's age.
        comment doc end
        constructor start : Person name string age float
            operation : { member variable : private { this } name } equals name
            operation : { member variable : private { this } age} equals age
        constructor end
    class end
    
    comment line : Coming soon: member functions
    
    main start
        comment line : Coming soon: instances
    main end
file end`,
};

/* tslint:enable */
