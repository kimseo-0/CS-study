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
- if the same key is given multiple values, 
the most-recently-written value overwrites all previous value 

### Key Format Recommendations
- label key is the left-hand side of the key-value pair
- keys are alphanumeric strings which may contain periods (.) and hyphens (-)

### Key Guidelines
- reverse DNS notation of a domain they own
- domain owner's permission > 해당 도메인에 소속하거나 관리가능

- 카멜 케이스 : begin & end with a lower-case letter
- should only contain
    - lower-case alphanumeric characters
    - period character(.)
    - hyphen character(-)
- 연속해서 ., - 사용 금지
- namespace 'fields' is separated by the period character(.)

### Value Guidelines
- JSON, XML, CSV, YAML
- Should be serialized to a string first, 
using a mechanism specific to the type of structure.

### Label Examples
``` 
LABEL <key>=<value>

LABEL version="1.0"
LABEL multi.label1="value1" multi.label2="value2"
```

``` 
"Labels": {
    "version": "1.0",
    "multi.label1"="value1",
    "multi.label2"="value2"
}
```

``` 
docker node update --label-add foo worker1

// add multiple labels
docker node update --label-add foo --label-add bar worker1
```

### How to Update Labels
- Labels on image, containers, local Docker daemons, volumes, networks
    - static for the lifetime of the object
    - To change labels, you must recreate the object
- Labels on swarm nodes and services
    - can be updated dynamically

## Reading Articles
