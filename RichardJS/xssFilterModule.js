export function filterHTML(input){
    while (input.includes("<")) {
            input = input.replace("<", "&lt");
        }
        while (InputList[i].includes(">")) {
            input = input.replace(">", "&gt");
        }
        return input
}