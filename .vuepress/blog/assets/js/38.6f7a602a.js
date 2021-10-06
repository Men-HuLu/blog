(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{219:function(s,n,e){"use strict";e.r(n);var t=e(0),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[s._v("#")]),s._v(" 同步")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//1.建立socket对象(用于监听)\n//1.网络地址。2.数据传输格式，3通信协议\nSocket serverSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);\n//2.绑定ip和端口\nIPAddress ip = IPAddress.Parse('192.168.168.108);\nIPEndPoint iPEndPoint = new IPEndPoint(ip, 50505);\nserverSocket.Bind(iPEndPoint);\n//3.开始侦听\nserverSocket.Listen(10);\n//4.开始接受客户端链接（用于传输）\n//Accept执行 ，阻塞当前主线程，一直到客户端链接上\nSocket proxSocket = serverSocket.Accept();\nstring str = DateTime.Now.ToString();\nbyte[] data = Encoding.Default.GetBytes(str);\nproxSocket.Send(data,0,data.Length,SocketFlags.None);\n//5.关闭\nproxSocket.Shutdown(SocketShutdown.Both);\nproxSocket.Close();\n//6.监听的关闭\nserverSocket .Close();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"异步改进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步改进"}},[s._v("#")]),s._v(" 异步改进")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('List<Socket> Clientsockets = new List<Socket>();\nprivate void button1_Click(object sender, EventArgs e)\n{\n    //1.建立socket对象\n    //1.网络地址。2.数据传输格式，3通信协议\n    Socket serverSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);\n    //2.绑定ip和端口\n    IPAddress ip = IPAddress.Parse("192.168.168.108");\n    IPEndPoint iPEndPoint = new IPEndPoint(ip,int.Parse("5050"));\n    serverSocket.Bind(iPEndPoint);\n    //3.开始侦听\n    serverSocket.Listen(10);\n    ThreadPool.QueueUserWorkItem(new WaitCallback(this.StaetAcceptClient),serverSocket);\n}\n\npublic void StaetAcceptClient(object state)\n{\n    //4.开始接受客户端链接\n    //Accept执行 ，阻塞当前主线程，一直到客户端链接上\n    var serverSocket = (Socket)state;\n    while (true)\n    {\n        Socket proxSocket = serverSocket.Accept();\n        Clientsockets.Add(proxSocket);             \n        ThreadPool.QueueUserWorkItem(new WaitCallback(this.ReciveData), proxSocket);\n    }\n}\n\npublic void ReciveData(object obj)\n{\n    var proxSocket = (Socket)obj;\n    byte[] data = new byte[1024 * 1024];\n    while (true)\n    {\n        //代表实际上接收的返回数\n        int reallen = proxSocket.Receive(data, 0, data.Length, SocketFlags.None);\n        if (reallen==0)\n        {\n            //退出了\n            proxSocket.Shutdown(SocketShutdown.Both);\n            proxSocket.Close();\n            Clientsockets.Remove(proxSocket);\n            return;\n        }\n        string fromClientMsg = Encoding.Default.GetString(data,0,reallen);\n        proxSocket.RemoteEndPoint.ToString();\n    }\n}\n\nprivate void button2_Click(object sender, EventArgs e)\n{\n    foreach (var socket in Clientsockets)\n    {\n        if (socket.Connected)\n        {\n            string str = "发送的消息";\n            byte[] data = Encoding.Default.GetBytes(str);\n            socket.Send(data,0,data.Length,SocketFlags.None);\n        }\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);