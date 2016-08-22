function logMe(msg) {
	return msg || "Message not provided!";
}

console.log(logMe());
console.log(logMe("testing..."));