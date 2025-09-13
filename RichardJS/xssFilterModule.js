export function filterHTML(input){
    while (input.includes("<")) {
            input = input.replace("<", "&lt");
        }
        while (input.includes(">")) {
            input = input.replace(">", "&gt");
        }
        return input
}