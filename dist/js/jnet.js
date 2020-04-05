/**
 * Raw     : https://raw.githubusercontent.com/lamhotsimamora/jnet/master/dist/js/jnet.js
 * Author  : @lamhotsimamora | { Jnet }
 * Updated April 2020
 * Copyright@2020
 */

const __init = {
    header: 'application/json'
}

function __isFunc(f) { var t = {}; return f && t.toString.call(f) === '[object Function]' }

function __dbg(message){
    console.error('[jnet] '+message);
}

class _jnet
{
    constructor(init){
        if (init){
            this.url = init.url;
            this.method = init.method;
            this.data = init.data;
            this.header = init.header;
            this.auto = init.auto ? init.auto : true;
        }else{
            __dbg('Kamu harus memasukkan data init');
        }
        return this;
    }

    request(callback,error) {
        let method = this.method === undefined ? 'GET' : this.method;
        let url = this.url;
        let auto = this.auto;
        if (url)
        {
             let form_data = null; 
            switch (method.toLowerCase()) 
            {
                case 'get':
                    method = 'GET'; break;
                case 'post':
                    var i = 0;
                    method = 'POST'; 
                    for (var key in this.data) 
                    { 
                        if (key === 'length' || !this.data.hasOwnProperty(key)) { 
                            continue 
                        } 
                        var vL = this.data[key];
                        (i == 0) ? form_data = key + '=' + vL: form_data += '&' + key + '=' + vL;
                        i++ 
                    } 
                    break;
                case 'put':
                    method = 'PUT'; break;
                case 'delete':
                    method = 'DELETE'; break;
                default:
                    method = 'GET' ; break;
            }

            var x = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
            x.onreadystatechange = function() {
                if (auto==false){
                    return callback(this);
                }
                else
                {
                    if (this.readyState == 4 && this.status == 200) 
                    {
                        if (callback != undefined && __isFunc(callback)) {
                            callback(this.responseText, this)
                        }
                        else 
                        { 
                            __dbg('Callback tidak ada'); 
                        }
                    }
                }
            };
            x.onerror = function() { 
                return error(this); 
            };
            x.open(method, url, !0);
            let header = (this.header) ? (this.header) : __init.header;
            x.setRequestHeader('Content-Type', header);
            try { 
                x.send(form_data) 
            } 
            catch (error) 
            { 
                __dbg("error ajax request { " + method + " } -> " + error); 
            }  
            return this;
        }
       
    }
}


function jnet(init){
    if (init){
        return new _jnet(init)
    }
}