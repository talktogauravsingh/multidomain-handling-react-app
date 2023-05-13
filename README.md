# multidomain-handling-react-app
Objectives - Create an application which can handle multiple domain based routing in reactjs.

```mermaid

flowchart LR

A(www.domain-a.com) --> |Request| D{React Application}
B(www.domain-b.in) --> |Request| D{React Application}
C(www.domain-c.org) --> |Request| D{React Application}

D{React Application} --> E[Serve content A for domain-a]
D{React Application} --> F[Serve content B for domain-b]
D{React Application} --> G[Serve content C for domain-c]

```
