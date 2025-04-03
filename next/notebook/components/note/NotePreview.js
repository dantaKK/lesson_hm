import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
    'img',
    'h1',
    'h2',
]);

const allowedAttributes = Object.assign(
    {},
    sanitizeHtml.defaults.allowedAttributes,
    {
        img: ['src', 'alt'],
    }
);

export default function NotePreview({ children }) {
    // 确保传入的内容是字符串类型
    const content = typeof children === 'string' ? children : '';
    
    return (
        <div 
            className="note-preview" 
            dangerouslySetInnerHTML={{
                __html: sanitizeHtml(marked(content), {
                    allowedTags,
                    allowedAttributes,
                })
            }}
        />
    );
} 