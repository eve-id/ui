export default function safe(value, unsafe = "unsafe") {
	return new Proxy(
		{},
		{
			get: (_, prop) => {
				if (prop === unsafe) return value;
				else if (value && typeof value[prop] !== "undefined") return safe(value[prop]);
				else return safe(undefined);
			},
		},
	);
}
