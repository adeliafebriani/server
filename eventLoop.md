## RESULT OF OPERATION system (error Or data)
1. OPERATION (use node.js internally)
    -timer
    -pending callbacks
    -idle stage Or (preparing)
    -pool
    -check
    -close callbacks

    // each circle is call tick
    // after one cycle, it will return back to the pool
    // on check, timer will works too

2. terminal> node index.js (pool phase)

## Pool
It waits for all callbacks functions, events, and io(input&output) operation

## Check to the timer

setTimeout setInterval

setImmediate
    // run immediately

process.nextTick

data structure(first in, first out)
