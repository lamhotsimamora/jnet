# jnet

Simple XMLHttpRequest for Javascript

## Preview Code 

```
	jnet({
		url : 'https://jsonplaceholder.typicode.com/posts',
		method : 'get',
		data : {
			
		},
		auto : true,
		header : 'application/json'
	}).request($response =>{
		 let $obj = JSON.parse($response);
	})
```