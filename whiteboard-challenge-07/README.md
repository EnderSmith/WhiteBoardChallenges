#Write a function which accepts a linked list as it's only argument, and returns true or false. - If the linked list is circular (it has no end), return true - Else return false

###Usage:

#####setup:

```
$ node

> const main = require(./index);

> const prefab = require(./lib/prefab);
```

#####try a non looping linked list:

```
> const nonlooping = prefab.nonlooping;

> main(nonlooping);
```

#####try a looping linked list:

```
> const looping = prefab.looping;

> main(looping);
```

###Testing:

```
$ npm run test
```

###Big O

_O(N)_
