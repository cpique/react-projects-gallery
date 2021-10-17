var languages = [
    {
        "id": 1,
        "name": "Python",
        "tiobe": "https://www.tiobe.com/tiobe-index/python/",
        "website": "https://www.python.org/",
        "creator": "Guido van Rossum",
        "hello_world": "print('Hello World')",
        "description": "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms. The Python interpreter and the extensive standard library are freely available in source or binary form for all major platforms from the Python web site, https://www.python.org/, and may be freely distributed. The same site also contains distributions of and pointers to many free third party Python modules, programs and tools, and additional documentation. The Python interpreter is easily extended with new functions and data types implemented in C or C++ (or other languages callable from C). Python is also suitable as an extension language for customizable applications.",
        "image": "https://1000marcas.net/wp-content/uploads/2020/11/Python-logo.png",
        "since": 1991
    },
    {
        "id": 2,
        "name": "C",
        "tiobe": "https://www.tiobe.com/tiobe-index/c/",
        "website": "https://en.cppreference.com/w/c",
        "creator": "Dennis Ritchie",
        "hello_world": "#include <stdio.h> \nint main() { \nprintf('Hello, World!');\nreturn 0;\n}",
        "description": "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems. \nA successor to the programming language B, C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system.[6] During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages,[7][8] with C compilers from various vendors available for the majority of existing computer architectures and operating systems. C has been standardized by ANSI since 1989 (ANSI C) and by the International Organization for Standardization (ISO). \nC is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.\nSince 2000, C has consistently ranked among the top two languages in the TIOBE index, a measure of the popularity of programming languages.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/140px-The_C_Programming_Language_logo.svg.png",
        "since": 1972
    },
    {
        "id": 3,
        "name": "Java",
        "tiobe": "https://www.tiobe.com/tiobe-index/java/",
        "website": "https://docs.oracle.com/javase/7/docs/technotes/guides/language/",
        "creator": "James Gosling",
        "hello_world": "\nclass HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(´'Hello, World!'); \n\t}\n}",
        "description": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client-server web applications, with a reported 9 million developers.\nJava was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle) and released in 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions.",
        "image": "https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.jpg",
        "since": 1996
    },
    {
        "id": 4,
        "name": "C++",
        "tiobe": "https://www.tiobe.com/tiobe-index/cplusplus/",
        "website": "https://www.cplusplus.com/",
        "creator": "Bjarne Stroustrup",
        "hello_world": "#include <iostream>\nint main() {\n\tstd::cout << 'Hello World!';\n\treturn 0;\n}",
        "description": "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.\nC++ was designed with an orientation toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights.[10] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[10] including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes).\nC++ is standardized by the International Organization for Standardization (ISO), with the latest standard version ratified and published by ISO in December 2020 as ISO/IEC 14882:2020 (informally known as C++20).[12] The C++ programming language was initially standardized in 1998 as ISO/IEC 14882:1998, which was then amended by the C++03, C++11, C++14, and C++17 standards. The current C++20 standard supersedes these with new features and an enlarged standard library. Before the initial standardization in 1998, C++ was developed by Danish computer scientist Bjarne Stroustrup at Bell Labs since 1979 as an extension of the C language; he wanted an efficient and flexible language similar to C that also provided high-level features for program organization.[13] Since 2012, C++ has been on a three-year release schedule[14] with C++23 as the next planned standard.",
        "image": "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
        "since": 1983
    },
    {
        "id": 5,
        "name": "C#",
        "tiobe": "https://www.tiobe.com/tiobe-index/csharp/",
        "website": "https://docs.microsoft.com/en-us/dotnet/csharp/",
        "creator": "Anders Hejlsberg",
        "hello_world": "using System;\npublic class Program\n{\n\tpublic static void Main()\n\t{\n\t\tConsole.WriteLine('Hello World');\n\t}\n}",
        "description": "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\nC# was designed by Anders Hejlsberg from Microsoft in 2000 and was later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. Microsoft introduced C# along with .NET Framework and Visual Studio, both of which were closed-source. At the time, Microsoft had no open-source products. Four years later, in 2004, a free and open-source project called Mono began, providing a cross-platform compiler and runtime environment for the C# programming language. A decade later, Microsoft released Visual Studio Code (code editor), Roslyn (compiler), and the unified .NET platform (software framework), all of which support C# and are free, open-source, and cross-platform. Mono also joined Microsoft but was not merged into .NET.",
        "image": "https://i0.wp.com/yeisonpx.com/wp-content/uploads/2020/03/csharp_api1.jpg?resize=750%2C422&ssl=1",
        "since": 2000
    },

]

export default languages