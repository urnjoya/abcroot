 function convertCase(mode) {
            const text = document.getElementById('input-text').value;

            if (!text.trim()) {
                showNotification('Please enter some text', 'error');
                return;
            }

            let result = '';
            const words = text.trim().split(/\s+/);

            switch (mode) {

                case 'reverse-text':
                    result = text.split('').reverse().join('');
                    break;
                case 'reverse-words':
                    {
                        const words = text.trim().split(/\s+/);
                        result = words.reverse().join(' ');
                    }
                    break;
                case 'reverse-sentences':
                    {
                        const sentences = text
                            .match(/[^.!?]+[.!?]*\s*/g);

                        if (sentences) {
                            result = sentences.reverse().join('').trim();
                        } else {
                            result = text;
                        }
                    }
                    break;

                default:
                    result = text;
            }

            document.getElementById('result').textContent = result;
        }

