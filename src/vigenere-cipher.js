class VigenereCipheringMachine {
    constructor(mode) {
        this.mode = mode === undefined || mode === true ? 'direct' : 'reverse';
    }

    transformKey(key, message, n) {
        let result = '';
        let j = 0;
        for (let i = 0; i < n; i++) {
            if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
                result += message[i];
                continue;
            }
            if (j === key.length)
                j = 0;
            result += key[j];
            j++;
        }
        return result;
    }

    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        this.key = this.transformKey(key, message, message.length);
        let result = '';
        for (let i = 0; i < message.length; i++) {
            if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
                result += String.fromCharCode(((message[i].charCodeAt() - 65 + this.key[i].charCodeAt() - 65) % 26) + 65);
            } else
                result += message[i]
        }
        return this.mode === 'direct' ? result : result.split('').reverse().join('');
    }

    decrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        this.key = this.transformKey(key, message, message.length);
        let result = '';
        for (let i = 0; i < message.length; i++) {
            if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
                result += String.fromCharCode(((message[i].charCodeAt() - 64 + 26 - (this.key[i].charCodeAt() - 64)) % 26) + 65);
            } else
                result += message[i]
        }
        return this.mode === 'direct' ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;