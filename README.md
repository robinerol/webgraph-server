# 🥔 WebGraph-Server

> A super minimal dev server to be used with the [WebGraph](https://github.com/robinerol/webgraph) repository.

## 📨 Installation

Clone the repository and run:

```javascript
npm install
```

## 🖥 Usage

To start the server run:

```javascript
npm run serve
```

This will spawn a process listening at port <code>9002</code>.

The installation will generate a random search result. To regenerate the generated json run:

```javascript
npm run prepare
```

## 🚏 Available endpoints

<table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>Parameter</th>
            <th>Returns</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/</code></td>
            <td></td>
            <td>All nodes.</td>
        </tr>
        <tr>
            <td><code>/node</code></td>
            <td><code>q: Node ID</code></td>
            <td>The data of the node id passed via parameter q.</td>
        </tr>
    </tbody>
</table>

## ⚫️ Node attributes

<table>
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Type</th>
            <th>Value range</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td><code>string</code></td>
            <td>15 character long hash</td>
        </tr>
        <tr>
            <td><code>score</code></td>
            <td><code>float</code></td>
            <td>0 to 100</td>
        </tr>
        <tr>
            <td><code>title</code></td>
            <td><code>string</code></td>
            <td>3 random words</td>
        </tr>
        <tr>
            <td><code>abstract</code></td>
            <td><code>string</code></td>
            <td>Random x long sentence</td>
        </tr>
        <tr>
            <td><code>author</code></td>
            <td><code>string</code></td>
            <td>Random last name</td>
        </tr>
        <tr>
            <td><code>year</code></td>
            <td><code>integer</code></td>
            <td>1990 until 2021</td>
        </tr>
        <tr>
            <td><code>important</code></td>
            <td><code>boolean</code></td>
            <td>20% likely to be true</td>
        </tr>
        <tr>
            <td><code>category</code></td>
            <td><code>integer</code></td>
            <td>0 or 1</td>
        </tr>
        <tr>
            <td><code>cluster</code></td>
            <td><code>integer</code></td>
            <td>0 to 3. 75% likely to have a cluster.</td>
        </tr>
        <tr>
            <td><code>refs</code></td>
            <td><code>Array&lt;string&gt;</code></td>
            <td>Random amount of node ids from the same cluster. Just applies to nodes which have a cluster.</td>
        </tr>
    </tbody>
</table>
