<script lang="ts">
    import { ButtonGroup, Input, InputAddon } from "flowbite-svelte"
    import usFlag from "/usFlag.svg";

    export let value = "";
    let formattedPhoneNumber = "";

    function formatPhoneNumber(value: string): string {
        const digits = value.replace(/[^0-9]/g, '').substring(0, 10);
        const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

        if (!match) return value;

        const [, areaCode, centralOfficeCode, lineNumber] = match;
        if (lineNumber) {
            return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
        } else if (centralOfficeCode) {
            return `(${areaCode}) ${centralOfficeCode}`;
        } else if (areaCode) {
            return `(${areaCode}`;
        }

        return value;
    }

    function onInputChange(v: string) {
        value = v.replace(/[^0-9]/g, '');
        formattedPhoneNumber = formatPhoneNumber(value)
    }
</script>

<div class="max-w-sm mx-auto">
    <ButtonGroup class="w-full">
        <InputAddon>
            <div class="flex justify-between w-10">
                <img src={usFlag} alt="US Flag">
                +1
            </div>
            
        </InputAddon>
        <Input type="text" name="last-name" placeholder="" required bind:value={formattedPhoneNumber} on:input={(e) => onInputChange((e.target! as any).value)} />
    </ButtonGroup>
</div>
<style></style>