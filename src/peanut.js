/*
                          Peanut.js
                    Javascript Made Easy.
    Created by: Antwaun Tune Jr, and several other programmers.
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function(window) {
    var document = window.document,
        session_called = false;
    push = [].push, slice = [].slice, splice = [].splice, forEach = [].forEach;

    function peanut(selector) {
        if (!(this instanceof peanut)) {
            return new peanut(selector);
        }
        if (!selector) {
            return this;
        }
        if (selector instanceof peanut) {
            return selector;
        }
        if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        }
        if (typeof selector === 'string') {
            return push.apply(this, slice.call(document.querySelectorAll(selector)));
        }
        if (typeof selector === 'function') {
            return peanut(document).ready(selector);
        }
    }
    var Error = {
        session: function() {
            console.log("Could not establish a connection session.");
            alert("Could not establish a connection session.");
        }
    };
    peanut.prototype = {
        length: 0,
        ready: function(callback) {
            if (/t/.test(document.readyState)) {
                callback(peanut);
            } else {
                document.addEventListener('DOMContentLoaded', function() {
                    callback(peanut);
                }, false);
            }
        },
        each: function(callback) {
            forEach.call(this, function(el, i) {
                callback.call(el, i, el);
            });
        },
        text: function(value) {
            return 1;
        },
        httpGet: function(url) {
            this.file = file;
            var phttp = new XMLHttpRequest();
            phttp.open('GET', file, true);
            phttp.onreadystatechange = function() {
                if (phttp.readyState == 4 && phttp.status == "200") {
                    return officejson.responseText;
                }
            };
            officejson.send(null);
        },
        loadJSON: function(file, callback) {
            this.file = file;
            var officejson = new XMLHttpRequest();
            officejson.overrideMimeType("application/json");
            officejson.open('GET', file, true);
            officejson.onreadystatechange = function() {
                if (officejson.readyState == 4 && officejson.status == "200") {
                  console.warn("Retrieved data from "+file);
                    callback(officejson.responseText);
                }
            };
            officejson.send(null);
        },
        shuffle: function(contents) {
            var output;
            this.contents = contents;
            output = this.contents[Math.floor(Math.random() * this.contents.length)];
            return output;
        },
        rand: function(arg, arg_2) {
            var output;
            output = Math.floor(Math.random() * (arg - arg_2 + 1)) + arg_2;
            return output;
        },
        toVar: function(arg, contains) {
            this.arg = arg;
            this.contains = contains;
            window[arg] = contains;
        },
        write: function(arg, arg2) {
            var w;
            w = document.createElement('div');
            w.textContent = this.arg;
            document.body.appendChild(w);
        },
        time: function() {
            var ampm, peanut_time, d, hour, min;
            d = new Date();
            hour = d.getHours() === 0 ? 12 : d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
            min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            ampm = d.getHours() < 12 ? 'AM' : 'PM';
            peanut_time = hour + ':' + min + ' ' + ampm;
            return peanut_time;
        },
        contains: function(arg, value) {
            if (typeof arg === 'string') {
                if (arg.indexOf(value) > -1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (arg.indexOf(value) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        newList: function(items, tags) {
            var i, listContainer, listData, listElement, listItem, numberOfListItems;
            this.tags = tags;
            this.items = items;
            listData = this.items;
            listContainer = document.createElement('div');
            document.getElementsByTagName('body')[0].appendChild(listContainer);
            listElement = document.createElement(this.tags[0]);
            listContainer.appendChild(listElement);
            numberOfListItems = listData.length;
            i = 0;
            while (i < numberOfListItems) {
                listItem = document.createElement(this.tags[1]);
                listItem.innerHTML = listData[i];
                listElement.appendChild(listItem);
                ++i;
            }
        },
        Images: {
            preload: function(images) {
                if (document.images) {
                    var i = 0;
                    var imageArray = new Array();
                    imageArray = images.split(',');
                    var imageObj = new Image();
                    for (i = 0; i <= imageArray.length - 1; i++) {
                        imageObj.src = imageArray[i];
                    }
                }
            },
            delete: function(images) {
                var imagesArr = new Array()
                imagesArr = images.split(',');
                for (i = 0; i <= imagesArr.length - 1; i++) {
                    image_x = document.getElementById(imagesArr[i]);
                    image_x.parentNode.removeChild(image_x);
                }
            }
        },
        session: function() {
            this.call = function() {
                return session_called = true;
            };
            this.get = function() {
                if (session_called == true) {
                    return Peanut;
                }
            };
            this.getIP = function() {
                var x_ip = Peanut.httpGet("https://api.ipify.org/?format=json");
                var y_ip = JSON.parse(x_ip);
                var output = y_ip.ip;
                return output;
            };
            this.ENV = function() {
                if (session_called == true) {
                    var OSName = "Unknown OS";
                    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
                    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
                    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
                    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
                    return OSName;
                } else {
                    console.log("Could not establish a connection session.");
                    alert("Could not establish a connection session.");
                }
            };
            this.Browser = function() {
                if (session_called == true) {
                    var isEdge;
                    if (Peanut.contains(navigator.userAgent, 'Edge')) {
                        isEdge = true;
                    }
                    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
                    var isFirefox = typeof InstallTrigger !== 'undefined';
                    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                    var isChrome = !!window.chrome && !isOpera;
                    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
                    if (isOpera == true) {
                        return 'Opera';
                    } else if (isFirefox == true) {
                        return 'Firefox';
                    } else if (isChrome == true) {
                        return 'Chrome';
                    } else if (isIE == true) {
                        return 'Internet Explorer';
                    } else if (isEdge == true) {
                        return 'Microsoft Edge';
                    }
                } else {
                    Error.session();
                }
            };
        },
        newHotKey: function(key, code) {
            this.code = code;
            this.key = key;
            var script = this.code;

            function doc_keyUp(e) {
                if (e.ctrlKey && e.keyCode == this.key) {
                    script;
                }
            }
            document.addEventListener('keyup', doc_keyUp, false);
        },
        isArray: function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        },
        remove: function(array, value) {
            this.array = array;
            this.value = value;
            var index = this.array.indexOf(this.value);
            if (index > -1) {
                this.array.splice(index, 1);
            }
        },
        merge: function(array, array_2) {
            this.array = array;
            this.array_2 = array_2;
            var output = this.array.concat(this.array_2);
            return output;
        },
        require: function(path) {
            var imported = document.createElement('script');
            imported.src = this.path;
            document.head.appendChild(imported);
        },
        isInt: function(str) {
            return (/^-?\d+$/.test(str));
        },
        sound: function(source, volume, loop) {
            this.source = source;
            this.volume = volume;
            this.loop = loop;
            var son;
            this.son = son;
            this.finish = false;
            this.stop = function() {
                document.body.removeChild(this.son);
            };
            this.start = function() {
                if (this.finish) return false;
                this.son = document.createElement("embed");
                this.son.setAttribute("src", this.source);
                this.son.setAttribute("hidden", "true");
                this.son.setAttribute("volume", this.volume);
                this.son.setAttribute("autostart", "true");
                this.son.setAttribute("loop", this.loop);
                document.body.appendChild(this.son);
            };
            this.remove = function() {
                document.body.removeChild(this.son);
                this.finish = true;
            };
            this.init = function(volume, loop) {
                this.finish = false;
                this.volume = volume;
                this.loop = loop;
            };
        }
    };
    Peanut = peanut.prototype;
    peanut.prototype.splice = splice;
    window.peanut = window.P = peanut;
}(window));
