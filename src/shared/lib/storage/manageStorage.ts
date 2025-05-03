export enum ActionStorage {
	Set = 'set',
	Remove = 'remove',
	Get = 'get'
}

export function manageStorage(
	action: ActionStorage,
	keys: string[],
	values?: string[]
) {
	switch (action) {
		case ActionStorage.Set:
			if (!values || keys.length !== values.length) {
				throw new Error(
					'Ключи и значения должны иметь одинаковую длину для установки в хранилище.'
				)
			}
			keys.forEach((key, index) => {
				localStorage.setItem(key, values[index])
			})
			break

		case ActionStorage.Remove:
			keys.forEach(key => {
				localStorage.removeItem(key)
			})
			break

		case ActionStorage.Get:
			return keys.map(key => localStorage.getItem(key))

		default:
			throw new Error('Указано недопустимое действие.')
	}
}
