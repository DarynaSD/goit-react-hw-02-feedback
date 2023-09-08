// компонент <Section title="">, який рендерить секцію із заголовком і дітей (children)
// діти - статистика і кнопки

export default function Section({ title, children }) {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
        
    )
}