///--------------------------------------------HASH TABLE------------------------------



class Hash_table {
    constructor(size = 51) {
        this.hashmap = new Array(size);
    }
    hashfunction(value) {
        let total = 0;
        for (let i in value) total = (total * 193 + value.charCodeAt(i)) % this.hashmap.length;
        return total;
    }
    update(key, val) {
        let index = this.hashfunction(key);
        for (let i in this.hashmap[index]) {
            if (this.hashmap[index][i][0] === key)
                this.hashmap[index][i][1] = val;
            return this.hashmap[index];
        } return null;
    }

    add(key, val) {
        let index = this.hashfunction(key);
        if (!this.hashmap[index]) this.hashmap[index] = [];
        if (!this.update(key, val)) this.hashmap[index].push([key, val]);
        return this.hashmap;
    }

    get(key) {
        let index = this.hashfunction(key);
        if (this.hashmap[index])
            for (let i in this.hashmap[index])
                if (this.hashmap[index][i][0] === key) return this.hashmap[index][i][1]
        return null
    }
    key() {
        let keymap = []
        for (let i in this.hashmap)
            if (this.hashmap[i])
                for (let j in this.hashmap[i])
                    keymap.push(this.hashmap[i][j][0])
        return keymap;
    }
    value() {
        let valuemap = []
        for (let i in this.hashmap)
            if (this.hashmap[i])
                for (let j in this.hashmap[i])
                    if (!valuemap.includes(this.hashmap[i][j][1]))
                        valuemap.push(this.hashmap[i][j][1])
        return valuemap;
    }

}
let hash = new Hash_table(13);
hash.add('ranush', '0001');
hash.add('krishna', '0001');
hash.add('arun', '0003');
hash.add('kumar', '0004');
hash.add('sanu', '0005');
hash.add('tharun', '0006');
hash.add('ram', '0007');
hash.add('ram', '0008');

//output [ ,
//     [ [ 'kumar', '0004' ] ],
//     [ [ 'krishna', '0001' ] ],
//     ,
//     [ [ 'tharun', '0006' ] ],
//     [ [ 'ranush', '0001' ] ],
//     ,
//     [ [ 'ram', '0008' ] ],
//     ,
//     ,
//     ,
//     [ [ 'arun', '0003' ] ],

hash.update('krishna', 'updated')
//output
// [ [ 'krishna', 'updated' ] ]

hash.get('ranush');
//output
//0001

hash.key();
//output
//[ 'kumar', 'krishna', 'tharun', 'ranush', 'ram', 'arun' ]
hash.value();
//output
//[ '0004', 'updated', '0006', '0001', '0008', '0003' ]