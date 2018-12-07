Building...!!!
* Usage

API by Laravel: https://github.com/sonhip94/laravel-api
NextJS
- yarn install
- yarn dev
* API <br>
Register<br>
method: POST<br>
headers: none<br>

```
Input :
{
    name: '...',
    email: '...',
    password: '...',
    password_confirm: '...'
}
```
```
Output:
{
    message: 'Register Successfully'
}
```

Login<br>
method: POST<br>
```
Input :
{
    headers: {
        Authorization: Bearer + ${token}
    },
    email: '...',
    password: '...'
}
```
```
Output:
{
    token: 'abcxyz',
}
```
---------------------------------------------------

Products<br>
RESTful API<br>
```
Input: 
{
    headers: {
        Authorization: Bearer + ${token}
    },
    ...
}
```
```
Output: {
    Object Data
}
```
