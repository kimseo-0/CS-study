# Lecture 15 - Docker Labels

## Today's Reading Articles

## Course
- What is the Docker object label
- Why is important to use labels
- What are the use cases of labels on Docker objects?

### What is the Docker object label
mechanism for applying metadata to Docker objects
> Docker objects   
> Image, Container, local daemons, Volumes, Networks, Swarm nodes, Swarm services

### Why Labels?
- organize your images
- record licensing information
- annotate relationships between
    - containers
    - volumes
    - networks
- make sense for your business or application

### Label Keys & Values
- label is a key-value pair, stored as a string
- you can specify multiple labels for an object
- each key-value pair must be unique within an object
- if the same key is given multiple values, the most-recently-written value overwrites all previous value 

### Key Format Recommendations
- label key is the left-hand side of the key-value pair
- keys are alphanumeric strings which may contain periods (.) and hyphens (-)

### Key Guidelines


## Reading Articles
