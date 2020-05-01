export default{

    render(props){
        return `${this.css(props)}
                ${this.html(props)}`
    },
    html(p){
        return `
        <h2 id="title"></h2>
        <h4 id="author"></h4>
        <div class="image-container"></div>
        <button class="back"><</button>
        <button class="forward">></button>
        `    
    },

    css(p) {
        return `<style>

        
         h2,
        h4 {
            margin-bottom: 0;
            margin-top: 0;
            margin-left: 10px;
        }
        
        .image-container {
            margin-top: 15px;
            width: 100%;
            flex: 1;
            background-color: black;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 50%;
        }
        
         button {
            cursor: pointer;
            background: transparent;
            border: none;
            font-size: 48px;
            color: white;
            position: absolute;
            top: 50%;
        }
        
         button.back {
            left: 10px;
        }
        
         button.forward {
            right: 10px;
        }
        </style>
        `
    }
}