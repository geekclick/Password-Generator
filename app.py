import string,random
from flask import Flask,render_template,request


app = Flask(__name__)

@app.route('/', methods=["GET","POST"])
def home():
    length=8
    check1='checked'
    check2='checked'
    if request.method == "POST":
        length = int(request.form.get('length'))
        if 'digits' in request.form:
            digits = True
        else:
            digits=False
            check1 = ''
        if 'char' in request.form:
            char = True
        else:
            char = False
            check2 = ''
        password = generate_password(length, digits, char)
        return render_template('index.html',length=length, password=password, check1=check1,check2=check2)
    password = generate_password(length, True, True)
    return render_template('index.html',length=length, password=password, check1=check1,check2=check2)

def generate_password(length, include_digits, include_special_chars):
    characters = string.ascii_letters
    if include_digits:
        characters += string.digits
    if include_special_chars:
        characters += string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

if __name__ == '__main__':
    app.run(debug=True)