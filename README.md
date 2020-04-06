# jnet
Simple Library XMLHttpRequest (Javascript / AJAX)

## CDN
```
	<script src="https://www.cdn.lamhotsimamora.com/jnet/"></script>
```

## Example "Method GET" 

```
	jnet({
		url : 'https://jsonplaceholder.typicode.com/posts'
	}).request($response =>{
		 let $obj = JSON.parse($response);
		 console.log($obj);
	})
```

## Example "Method POST" 

```
	jnet({
		url : 'https://jsonplaceholder.typicode.com/posts',
		method : 'post',
		data : {
			username : 'alfa'
		}
	}).request($response =>{
		 let $obj = JSON.parse($response);
		 console.log($obj);
	})
```

## Example When Internet Disconnect 

```
	jnet({
		url : 'https://jsonplaceholder.typicode.com/posts',
		method : 'post',
		data : {
			username : 'alfa'
		}
	}).request($response =>{
		 let $obj = JSON.parse($response);
		 console.log($obj);
	},function(error){
		 console.table(error)
	})
```